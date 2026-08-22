import { Component } from '@angular/core';

type FeaturedMenuItem = {
  name: string;
  description: string;
  image: string;
};

type MenuItem = {
  name: string;
  description: string;
  usesProteins?: boolean;
  options?: string[];
  note?: string;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

@Component({
  imports: [],
  selector: 'app-menu',
  templateUrl: './menu.html',
})
export class Menu {
readonly menuUrl =
  'https://order.online/store/mi-casa-tortilleria-constitution-boulevard-26330860';

  readonly menuItems: FeaturedMenuItem[] = [
    {
      name: 'Carnitas Plate',
      description: 'Carnitas served with rice, beans, pico de gallo, and fresh tortillas.',
      image: 'images/carnitasPlate.png',
    },
    {
      name: 'Fresh Corn Tortillas',
      description: 'Fresh corn tortillas made right here at Mi Casa.',
      image: 'images/tortillas.png',
    },
    {
      name: 'Menudo',
      description: 'Traditional red chile soup with beef tripe, available every day.',
      image: 'images/menudo.png',
    },
    {
      name: 'Quesadilla',
      description: 'Flour tortillas with cheese and your choice of meat.',
      image: 'images/quesadilla.png',
    },
    {
      name: 'Street Tacos',
      description: 'Fresh corn tortillas filled with your choice of meat.',
      image: 'images/tacos.png',
    },
    {
      name: 'Tamales',
      description: '100% corn masa, filled and steamed in corn husks.',
      image: 'images/tamales.png',
    },
  ];

  readonly proteins = [
    'Al Pastor (Marinated Pork)',
    'Carne Asada (Steak)',
    'Carne al Vapor (Shredded Beef)',
    'Carnitas (Fried Pork)',
  ];

  readonly menuCategories: MenuCategory[] = [
    {
      name: 'Tacos & Handhelds',
      items: [
        {
          name: 'Burritos',
          description: 'Burrito served with rice and your choice of meat.',
          usesProteins: true,
        },
        {
          name: 'Quesadillas',
          description:
            'Two flour tortillas with Mexican blend cheese, mozzarella, and your choice of meat.',
          usesProteins: true,
        },
        {
          name: 'Street Tacos',
          description: 'Street-style tacos served on fresh corn tortillas.',
          usesProteins: true,
        },
        {
          name: 'Tortas',
          description:
            'Mexican sandwich with mayo, cheese, refried beans, green salsa, pico de gallo, avocado, and shredded lettuce.',
          usesProteins: true,
        },
      ],
    },
    {
      name: 'Plates',
      items: [
        {
          name: 'Birria Plate',
          description:
            'Birria served with beans, rice, pico de gallo, and your choice of corn or flour tortillas.',
        },
        {
          name: 'Carne Asada Plate',
          description: 'Carne asada served as a complete Mi Casa plate.',
        },
        {
          name: 'Carnitas Plate',
          description: 'Carnitas served with beans, rice, and pico de gallo.',
        },
        {
          name: 'Mole Plate',
          description:
            'Pork mole served with rice, beans, and your choice of corn or flour tortillas.',
        },
        {
          name: 'Quesadilla Plate',
          description: 'One quesadilla served with rice and beans.',
          usesProteins: true,
        },
        {
          name: 'Taco Plate',
          description: 'Three street tacos served with rice and beans.',
          usesProteins: true,
        },
        {
          name: 'Tamale Plate',
          description: 'Three tamales of your choice served with rice and beans.',
        },
      ],
    },
    {
      name: 'Soups & Tamales',
      items: [
        {
          name: 'Menudo',
          description:
            'Traditional Mexican soup made with beef tripe in a red chile broth.',
          note: 'Available every day.',
        },
        {
          name: 'Pozole',
          description:
            'Traditional Mexican soup made with pork and hominy in a red chile broth.',
          note: 'Available every day.',
        },
        {
          name: 'Tamales',
          description:
            'Made with 100% corn masa, filled and steamed in a corn husk.',
          options: [
            'Chocolate',
            'Green Chicken',
            'Pineapple',
            'Rajas con Queso',
            'Red Pork',
            'Strawberry',
            'Sweet Corn',
          ],
          note: 'Availability varies. Call ahead to check current flavors.',
        },
        {
          name: 'Tamales Preparados',
          description: 'Prepared tamales served Mi Casa style.',
          note: 'Check the online menu for current availability and options.',
        },
      ],
    },
    {
      name: 'Breakfast & Specials',
      items: [
        {
          name: 'Chilaquiles Rojos',
          description: 'Traditional chilaquiles prepared with red salsa.',
        },
        {
          name: 'Chilaquiles Verdes',
          description: 'Traditional chilaquiles prepared with green salsa.',
        },
        {
          name: 'Carnitas lb Combo',
          description: 'Carnitas combo made for sharing.',
          note: 'Check the online menu for current portions and pricing.',
        },
      ],
    },
    {
      name: 'From the Tortillería',
      items: [
        {
          name: 'Fresh Corn Tortillas',
          description: 'Fresh corn tortillas made right here at Mi Casa.',
        },
        {
          name: 'Masa para Tamales',
          description:
            'Prepared 100% corn masa ready for making your own tamales.',
        },
        {
          name: 'Pan Ranchero',
          description: 'Homemade country-style wheat bread.',
        },
      ],
    },
    {
      name: 'Drinks & Desserts',
      items: [
        {
          name: 'Aguas Frescas',
          description: 'Refreshing aguas frescas in available flavors.',
          note: 'Flavors may vary.',
        },
        {
          name: 'Champurrado',
          description: 'Traditional Mexican hot chocolate.',
          note: 'Seasonal: October–May.',
        },
        {
          name: 'Drinks',
          description: 'A selection of beverages available with your meal.',
          note: 'See the online menu for current options.',
        },
        {
          name: 'Empanadas',
          description:
            'Sweet empanadas with fillings such as sweet potato, pineapple, strawberry, and cream.',
        },
      ],
    },
  ];
}