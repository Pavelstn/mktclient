import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpashScreenComponent } from './spash-screen.component';

describe('SpashScreenComponent', () => {
  let component: SpashScreenComponent;
  let fixture: ComponentFixture<SpashScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpashScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
