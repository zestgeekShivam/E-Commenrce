import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() productName: string = '';
  @Input() productImagePath: string = '';
  @Input() productImageALT: string = '';
  @Input() productPrice: number = 0;
}
