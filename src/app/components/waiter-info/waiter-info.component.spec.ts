import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterInfoComponent } from './waiter-info.component';

describe('WaiterInfoComponent', () => {
  let component: WaiterInfoComponent;
  let fixture: ComponentFixture<WaiterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
