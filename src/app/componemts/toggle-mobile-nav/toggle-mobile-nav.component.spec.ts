import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleMobileNavComponent } from './toggle-mobile-nav.component';

describe('ToggleMobileNavComponent', () => {
  let component: ToggleMobileNavComponent;
  let fixture: ComponentFixture<ToggleMobileNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleMobileNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleMobileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
