import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChangeFontComponent } from './app-change-font.component';

describe('AppChangeFontComponent', () => {
  let component: AppChangeFontComponent;
  let fixture: ComponentFixture<AppChangeFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppChangeFontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChangeFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
