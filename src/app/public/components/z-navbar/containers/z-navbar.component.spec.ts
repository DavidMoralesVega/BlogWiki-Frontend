import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZNavbarComponent } from './z-navbar.component';

describe('ZNavbarComponent', () => {
  let component: ZNavbarComponent;
  let fixture: ComponentFixture<ZNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
