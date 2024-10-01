import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeFontComponent } from './app-change-font.component';

describe('AppChangeFontComponent', () => {
  let component: ChangeFontComponent;
  let fixture: ComponentFixture<ChangeFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeFontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
