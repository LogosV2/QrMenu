import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBoardComponent } from './store-board.component';

describe('StoreBoardComponent', () => {
  let component: StoreBoardComponent;
  let fixture: ComponentFixture<StoreBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
