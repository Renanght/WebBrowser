const { app, WebContentsView, BrowserWindow, ipcMain, Menu,dialog } = require('electron');
const path = require('node:path');
const { isMainFrame } = require('node:process');

app.whenReady().then(() => {

  // BrowserWindow initiate the rendering of the angular toolbar
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    icon: path.join(__dirname, './src/assets/logo/Browserlogo.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  if (app.isPackaged){
    win.loadFile('dist/browser-template/browser/index.html');
  }else{
    win.loadURL('http://localhost:4200')
  }


  // WebContentsView initiate the rendering of a second view to browser the web
  const view = new WebContentsView();
  win.contentView.addChildView(view);

view.webContents.on('did-start-navigation', (event,url,isInPlace,isMainFrame) =>{
  win.webContents.send('MAJnavbar',url);

});


  Menu.setApplicationMenu(null);
  // Always fit the web rendering with the electron windows
  function fitViewToWin() {
    const winSize = win.webContents.getOwnerBrowserWindow().getBounds();
    view.setBounds({ x: 0, y: 55, width: winSize.width, height: winSize.height });
  }

    win.webContents.openDevTools({ mode: 'detach' });

  // Register events handling from the toolbar
  ipcMain.on('toogle-dev-tool', () => {
    if (winContent.isDevToolsOpened()) {
      win.webContents.closeDevTools();
    } else {
      win.webContents.openDevTools({ mode: 'detach' });
    }
  });

  ipcMain.on('go-back', () => {
    view.webContents.navigationHistory.goBack();
  });

  ipcMain.handle('can-go-back', () => {
    return view.webContents.navigationHistory.canGoBack();
  });

  ipcMain.on('go-forward', () => {
    view.webContents.navigationHistory.goForward();
  });

  ipcMain.handle('can-go-forward', () => {
    return view.webContents.navigationHistory.canGoForward();
  });

  ipcMain.on('refresh', () => {
    view.webContents.reload();
  });

  ipcMain.handle('go-to-page', (event, url) => {


    if (url.substring(0, 7) !== "http://" && url.substring(0, 8) !== "https://") {
      url = "http://" + url;
    }
      
       const httpsUrl = url.replace(/^http:/, 'https:');

  fetch(httpsUrl, { method: 'HEAD' }) 
    .then(() => {
      console.log("https");
      view.webContents.loadURL(httpsUrl);
    })
    .catch(() => {
      console.log("http");
      fetch(url, { method: 'HEAD' })
      .then(() => {
        console.log("http");
        view.webContents.loadURL(url);
      })
      .catch(() => {
        console.log("site n'existe pas ");
        
        dialog.showMessageBox({
          type: 'error',
          title: 'Erreur',
          message: 'La page n’existe pas.',
        });
        
      });
    });
  });


  ipcMain.handle('current-url', () => {
    return view.webContents.getURL();
  });



  //Register events handling from the main windows
  win.once('ready-to-show', () => {
    fitViewToWin();
    view.webContents.loadURL('https://amiens.unilasalle.fr');
  });

  win.on('resized', () => {
    fitViewToWin();
  });
})
