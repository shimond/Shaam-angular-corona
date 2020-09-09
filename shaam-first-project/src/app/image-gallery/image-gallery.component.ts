import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  selectedImage = '';
  @Input() allImages: string[] = [];
  constructor() { }

  ngOnInit(): void {
    if (this.allImages.length > 0) {
      this.selectedImage = this.allImages[0];
    }
  }

  setSelectedImage(image: string): void {
    this.selectedImage = image;
  }

}
