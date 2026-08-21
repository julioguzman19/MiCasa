import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-gallery',
  templateUrl: './gallery.html',
})
export class Gallery {
  readonly images = [
    {
      src: 'images/gallery/gallery-1.jpg',
      alt: 'Fresh Mexican food from Mi Casa Tortilleria',
    },
    {
      src: 'images/gallery/gallery-2.jpg',
      alt: 'Fresh corn tortillas at Mi Casa Tortilleria',
    },
    {
      src: 'images/gallery/gallery-3.jpg',
      alt: 'Tacos served at Mi Casa Tortilleria',
    },
    {
      src: 'images/gallery/gallery-4.jpg',
      alt: 'Traditional Mexican food at Mi Casa Tortilleria',
    },
    {
      src: 'images/gallery/gallery-5.jpg',
      alt: 'Tamales from Mi Casa Tortilleria',
    },
    {
      src: 'images/gallery/gallery-6.jpg',
      alt: 'Inside Mi Casa Tortilleria',
    },
  ];
}