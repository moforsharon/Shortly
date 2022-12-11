import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostLinkComponent } from './boost-link.component';

describe('BoostLinkComponent', () => {
  let component: BoostLinkComponent;
  let fixture: ComponentFixture<BoostLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
