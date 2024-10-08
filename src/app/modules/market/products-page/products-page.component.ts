import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  categories: Category[] = [
    { name: 'PHONES' },
    { name: 'TABLETS' },
    { name: 'LAPTOPS' },
    { name: 'DESKTOP COMPUTERS' },
    { name: 'GAMING CONSOLES' },
  ];
  products: Product[] = [];
  selectedCategory?: string;

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        title: '3310',
        description: "It's indestructible!",
        media: 'assets/images/Phone1.png',
        category: 'PHONES'
      },

      {
        id: 2,
        title: 'Motorolla Old Phone',
        description: "It's retro!",
        media: 'assets/images/Phone2.png',
        category: 'PHONES'
      },

      {
        id: 3,
        title: 'iString',
        description: "When you prefer short-distance comminucations.",
        media: 'assets/images/Phone3.png',
        category: 'PHONES'
      },

      {
        id: 4,
        title: 'Samsung Galaxy Tab S10 Ultra',
        description: "14.6-inch AMOLED screen with a resolution of 2960 x 1848 pixels and a 120Hz refresh rate.",
        media: 'assets/images/Tablet1.png',
        category: 'TABLETS'
      },

      {
        id: 5,
        title: 'iRock',
        description: "Perfect for writing commandments.",
        media: 'assets/images/Tablet2.png',
        category: 'TABLETS'
      },

      {
        id: 6,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'TABLETS'
      },

      {
        id: 7,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'LAPTOPS'
      },

      {
        id: 8,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'LAPTOPS'
      },

      {
        id: 9,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'LAPTOPS'
      },

      {
        id: 10,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'DESKTOP COMPUTERS'
      },

      {
        id: 11,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'DESKTOP COMPUTERS'
      },

      {
        id: 12,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'DESKTOP COMPUTERS'
      },

      {
        id: 13,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'GAMING CONSOLES'
      },

      {
        id: 14,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'GAMING CONSOLES'
      },

      {
        id: 15,
        title: '',
        description: 'Please check back again later!',
        media: 'assets/images/Out_of_stock.png',
        category: 'GAMING CONSOLES'
      },

     ]
  }

  onCategoryChanged(category: string) {
    this.selectedCategory = category;
    alert('You have selected the category ' + '"' + category + '".');
  }

  get filteredProducts() {
    if (!this.selectedCategory) {
      return [];
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }
}
