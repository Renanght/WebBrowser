
import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-app-change-font',
  standalone: true,
  imports: [],
  templateUrl: './app-change-font.component.html',
  styleUrl: './app-change-font.component.css'
})


export class ChangeFontComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
  }

  changeFont() {
    if (isPlatformBrowser(this.platformId)) {
      console.log("blablabla")
      // Applique la police Arial au niveau du document
      document.body.style.fontFamily = 'Arial, sans-serif';
    }
  }
}
