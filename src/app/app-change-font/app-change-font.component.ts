
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, inject, ViewChild, OnInit,PLATFORM_ID } from '@angular/core';
import { BrowserService } from '../browser.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-change-font',
  standalone: true,
  imports: [MatIconModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './app-change-font.component.html',
  styleUrls: ['./app-change-font.component.css']
})
export class AppChangeFontComponent implements OnInit {

  currentFontImage = '../../assets/logo/minecraftphoto.png'; // Image for initial font
  defaultFontImage = '../../assets/logo/minecraftphotobarree.png'; // Image for default font

  ngOnInit() {
  }

  changeFont() {

    if (this.currentFontImage === '../../assets/logo/minecraftphoto.png') {
      // Change to default font and image
      this.currentFontImage = this.defaultFontImage;
      // Execute code to change font to default
      (window as any).electronAPI.ChangeFontMinecraft(() => {});
    } else {
      // Change to Minecraft font and image
      this.currentFontImage = '../../assets/logo/minecraftphoto.png';
      // Execute code to change font to Minecraft
      
      (window as any).electronAPI.ChangeFontBlank(() => {});
    }
    

    if ((window as any).electronAPI) {
      
      
    }
  }





}
