import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalyOrderCakeInfoComponent } from './finaly-order-cake-info.component';

describe('FinalyOrderCakeInfoComponent', () => {
  let component: FinalyOrderCakeInfoComponent;
  let fixture: ComponentFixture<FinalyOrderCakeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalyOrderCakeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalyOrderCakeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
