import { Component, ElementRef, inject, ViewChild, OnInit } from '@angular/core';
import { BrowserService } from '../browser.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [MatIconModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef = new ElementRef({});

  public browserService = inject(BrowserService);
  public currentUrl:String = '';

  ngOnInit(): void{
    if ((window as any).electronAPI) {
      (window as any).electronAPI.MajAddress((event:any,url:string) => {
        this.currentUrl = url;
        this.searchElement.nativeElement.value = url;
        });
    }
  }

  onKeyDownEvent(e: KeyboardEvent) {
    if (e.currentTarget===null){
      return;
    }
    if (e.key === 'Escape') {
      window.blur();
      this.browserService.setToCurrentUrl();
    } else if (e.key === 'Enter') {
      let value = this.browserService.url;
      if(!value.startsWith("http")){
        value = "https://" + value;
      }
      window.blur();
      this.goToPage(value);
    }
  }

  onMouseDown(e: any) {
    this.searchElement.nativeElement.select();
  };

  goToPage(url: string) {
    this.browserService.goToPage(url);
  }
}
