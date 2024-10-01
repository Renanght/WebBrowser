import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BackwardComponent } from './backward/backward.component';
import { DebugComponent } from './debug/debug.component';
import { ForwardComponent } from './forward/forward.component';
import { RefreshComponent } from './refresh/refresh.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeButtonComponent } from './home-button/home-button.component';
import { ChangeFontComponent } from "./app-change-font/app-change-font.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, AddressComponent, BackwardComponent, DebugComponent, ForwardComponent, RefreshComponent, HomeButtonComponent, ChangeFontComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'browser-template';
}
