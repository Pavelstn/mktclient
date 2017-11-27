import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';

@Component({
  selector: 'app-big-gallery',
  templateUrl: './big-gallery.component.html',
  styleUrls: ['./big-gallery.component.sass']
})

export class BigGalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages = [];

  constructor() {

    this.galleryOptions = [


      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        'imageAutoPlay': true,
        'imageAutoPlayPauseOnHover': true,
        'previewAutoPlay': true,
        'previewAutoPlayPauseOnHover': true,
        'thumbnails': false
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: './assets/big-gallery/slide1.jpg',
        medium: './assets/big-gallery/slide1.jpg',
        big: './assets/big-gallery/slide1.jpg'
      }, {
        small: './assets/big-gallery/slide2.jpg',
        medium: './assets/big-gallery/slide2.jpg',
        big: './assets/big-gallery/slide2.jpg'
      }, {
        small: './assets/big-gallery/slide3.jpg',
        medium: './assets/big-gallery/slide3.jpg',
        big: './assets/big-gallery/slide3.jpg'
      }, {
        small: './assets/big-gallery/slide4.jpg',
        medium: './assets/big-gallery/slide4.jpg',
        big: './assets/big-gallery/slide4.jpg'
      }, {
        small: './assets/big-gallery/slide5.jpg',
        medium: './assets/big-gallery/slide5.jpg',
        big: './assets/big-gallery/slide5.jpg'
      },
    ];

  }

  ngOnInit() {
  }

}
