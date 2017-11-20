import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealTableComponent } from './deal-table.component';

describe('DealTableComponent', () => {
  let component: DealTableComponent;
  let fixture: ComponentFixture<DealTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
