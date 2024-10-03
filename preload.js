const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  toogleDevTool: () => ipcRenderer.send('toogle-dev-tool'),
  goBack: () => ipcRenderer.send('go-back'),
  goForward: () => ipcRenderer.send('go-forward'),
  refresh: () => ipcRenderer.send('refresh'),
  ChangeFontMinecraft: () => ipcRenderer.send('Change-Font-Minecraft'),
  ChangeFontBlank: () => ipcRenderer.send('Change-Font-Blank'),

  MajAddress: (callback) => ipcRenderer.on('MAJnavbar',callback),

  canGoForward: () => ipcRenderer.invoke('can-go-forward'),
  canGoBack: () => ipcRenderer.invoke('can-go-back'),
  goToPage: (url) => ipcRenderer.invoke('go-to-page', url),
  currentUrl: () => ipcRenderer.invoke('current-url')


})