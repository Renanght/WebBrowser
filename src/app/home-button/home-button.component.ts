import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserService } from '../browser.service'; 

@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {

  constructor(private browserService: BrowserService) {}

  goHome() {
    this.browserService.goToPage("https://amiens.unilasalle.fr");
  }
}
