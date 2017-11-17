import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {LoadDataService} from '../../../services/load-data.service';
import {CartService} from '../../../services/cart.service';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pages;
  page;
  galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];
  galleryImages = [];

  constructor(private cs: CartService, private route: ActivatedRoute, private ls: LoadDataService) {
  }

  ngOnInit() {
    this.pages = this.route.snapshot.data['page'];
    this.page = this.pages.pages[0];
    console.log('this.page', this.page);
    for (let i = 0; i < this.page.images_list.length; i++) {
      const item = this.page.images_list[i];
      this.galleryImages.push({small: item.thumb, medium: item.medium, big: item.original});
    }

    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
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


  }

  add_to_cart(id: number, c: any, t: any, i: any) {
    console.log('click');
    this.cs.addNewItem(id, c, t, i);
  }

}