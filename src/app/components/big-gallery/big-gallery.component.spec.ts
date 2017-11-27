import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigGalleryComponent } from './big-gallery.component';

describe('BigGalleryComponent', () => {
  let component: BigGalleryComponent;
  let fixture: ComponentFixture<BigGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
