import { Component } from '@angular/core';
import { GetProductService } from '../services/get-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  collectionInfo = [
    {
      url: '/assets/images/collections/collection1.png',
      category: 'Men',
    },
    {
      url: '/assets/images/collections/collection2.png',
      category: 'Women',
    },
    {
      url: '/assets/images/collections/collection3.png',
      category: 'Accessories',
    },
    {
      url: '/assets/images/collections/collection4.png',
      category: 'Simple Cotton',
    },
  ];

  constructor(private getProduct: GetProductService) {}
  newArrivals = this.getProduct.getProduct(3, 'men');
}
