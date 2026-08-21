import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-menu-preview',
  templateUrl: './menu-preview.html',
})
export class MenuPreview {
  readonly categories = [
    {
      name: 'Tacos & Tortas',
      items: ['Street Tacos', 'Tortas', 'Quesadillas'],
    },
    {
      name: 'Plates',
      items: ['Birria', 'Chile Verde', 'Mole'],
    },
    {
      name: 'Soups',
      items: ['Menudo', 'Pozole'],
    },
    {
      name: 'Tamales',
      items: ['Pork', 'Chicken', 'Rajas con Queso'],
    },
    {
      name: 'Tortillas & Masa',
      items: ['Fresh Corn Tortillas', 'Fresh Masa'],
    },
    {
      name: 'Drinks & Sweets',
      items: ['Champurrado', 'Pan Ranchero', 'Empanadas'],
    },
  ];
}