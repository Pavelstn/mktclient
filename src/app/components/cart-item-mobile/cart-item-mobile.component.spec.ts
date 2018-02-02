import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemMobileComponent } from './cart-item-mobile.component';

describe('CartItenMobileComponent', () => {
  let component: CartItemMobileComponent;
  let fixture: ComponentFixture<CartItemMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
