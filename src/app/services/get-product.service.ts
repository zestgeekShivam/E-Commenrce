import { Injectable } from '@angular/core';
import productJson from './product.json';
@Injectable({
  providedIn: 'root',
})
export class GetProductService {
  constructor() {}
  getProduct(productCount: number, tag: string) {
    let product = productJson;
    let filteredProduct = product.filter((item) => item.tags.includes(tag));
    return filteredProduct.slice(0, productCount);
  }
}
