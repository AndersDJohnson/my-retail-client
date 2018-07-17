import {Component, Input, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
    
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];
    
    @Input()
    public imageUrls: Array<string>;

    constructor() { }

    ngOnInit() {
        this.galleryOptions = [
            {
                width: '100%',
                height: '800px',
                thumbnailsColumns: 4,
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 30,
                thumbnailMargin: 30,
                thumbnailsArrows: true,
                thumbnailSize: NgxGalleryImageSize.Contain,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px'
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
    
        this.galleryImages = this.imageUrls.map(imgUrl => {
            return {
                small: imgUrl,
                medium: imgUrl,
                big: imgUrl
            };
        });
    
    }

}
