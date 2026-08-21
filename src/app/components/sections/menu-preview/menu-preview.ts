import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-menu-preview',
  templateUrl: './menu-preview.html',
})
export class MenuPreview {
  readonly menuItems = [
    {
      name: 'Birria Plate',
      description: 'Tender birria served with rice, beans, pico de gallo, and fresh tortillas.',
      image: 'images/birriaPlate.png',
    },
    {
      name: 'Menudo',
      description: 'A traditional Mexican favorite served with fresh tortillas and garnishes.',
      image: 'images/menudo.png',
    },
    {
      name: 'Street Tacos',
      description: 'Fresh corn tortillas filled with your choice of meat and served with salsa.',
      image: 'images/tacos.png',
    },
    {
      name: 'Quesadilla',
      description: 'Golden grilled quesadilla served with red and green salsa.',
      image: 'images/quesadilla.png',
    },
    {
      name: 'Tamales',
      description: 'Traditional tamales wrapped in corn husks and made with a variety of fillings.',
      image: 'images/tamales.png',
    },
    {
      name: 'Fresh Corn Tortillas',
      description: 'Fresh corn tortillas made right here at Mi Casa and available to take home.',
      image: 'images/tortillas.png',
    },
  ];
}