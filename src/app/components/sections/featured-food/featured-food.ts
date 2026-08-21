import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-featured-food',
  templateUrl: './featured-food.html',
})
export class FeaturedFood {
  readonly foods = [
    {
      name: 'Fresh Corn Tortillas',
      description: 'Freshly made corn tortillas prepared right here at Mi Casa.',
      image: 'images/featured/tortillas.jpg',
    },
    {
      name: 'Tamales',
      description: 'Traditional tamales made with the flavors our family grew up with.',
      image: 'images/featured/tamales.jpg',
    },
    {
      name: 'Street Tacos',
      description: 'Classic street tacos served on our fresh corn tortillas.',
      image: 'images/featured/tacos.jpg',
    },
    {
      name: 'Menudo',
      description: 'A comforting traditional favorite made with authentic Mexican flavor.',
      image: 'images/featured/menudo.jpg',
    },
  ];
}