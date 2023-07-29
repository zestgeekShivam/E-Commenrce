import { Component } from '@angular/core';
import { GetProductService } from '../services/get-product.service';
import { GetBlogsService } from '../services/get-blogs.service';

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

  socialImagePath: string[] = [
    'assets/images/social/socialMedia1.png',
    'assets/images/social/socialMedia2.png',
    'assets/images/social/socialMedia3.png',
    'assets/images/social/socialMedia4.png',
  ];

  constructor(
    private getProduct: GetProductService,
    private getBlogs: GetBlogsService
  ) {}
  newArrivals = this.getProduct.getProduct(3, 'men');
  blogs = this.getBlogs.generateMockBlogData(3);
}
