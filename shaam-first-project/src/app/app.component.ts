import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shaam-project';
  imagesVer1: string[] = [];
  imagesVer2: string[] = [];

  ngOnInit(): void {
    this.imagesVer1 = [
      '/assets/images/face1.jpg',
      '/assets/images/face3.jpg',
      '/assets/images/face5.jpg'
    ];

    this.imagesVer2 = [
      '/assets/images/face2.jpg',
      '/assets/images/face4.jpg',
      '/assets/images/face5.jpg'
    ];
  }
}
