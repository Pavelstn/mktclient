import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {LoadDataService} from '../../../services/load-data.service';
import {CartService} from '../../../services/cart.service';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';
// import {Title} from '@angular/platform-browser';
import {TitleService} from '../../../services/title.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  pages;
  page;
  galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];
  galleryImages = [];
  pageUnlock = false;

  constructor(private cs: CartService,
              private route: ActivatedRoute,
              private ls: LoadDataService,
              private titleService: TitleService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageUnlock = false;
      console.log('page', params);
      this.ls.getPage(params['id']);
      this.ls.pagesChange.subscribe((data) => {
        for (const page of this.ls.pages) {
          this.page = page;
          this.titleService.setTitle(this.page.title);
          this.preparePage();
        }
      });
    });
  }

  add_to_cart(id: number, c: any, t: any, i: any) {
    // console.log('click');
    this.cs.addNewItem(id, c, t, i);
  }

  private preparePage() {
    for (let i = 0; i < this.page.images_list.length; i++) {
      const item = this.page.images_list[i];
      this.galleryImages.push({small: item.thumb, medium: item.medium, big: item.original});
    }

    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageArrowsAutoHide: false,
        imageSwipe: true,
        previewSwipe: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        imageSwipe: true,
        previewSwipe: true
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        imageSwipe: true,
        previewSwipe: true
      }
    ];
    this.pageUnlock = true;
  }

  swipe(event){
    console.log('event', event);
  }

}
