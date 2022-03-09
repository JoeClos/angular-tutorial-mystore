import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BckbtnComponent } from './bckbtn.component';

describe('BckbtnComponent', () => {
  let component: BckbtnComponent;
  let fixture: ComponentFixture<BckbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BckbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BckbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
