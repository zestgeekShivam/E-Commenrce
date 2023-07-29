import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-grid',
  templateUrl: './attribute-grid.component.html',
  styleUrls: ['./attribute-grid.component.scss'],
})
export class AttributeGridComponent {
  attributeData = [
    {
      path: 'assets/icons/delivery.svg',
      title: 'Free Delivery Worldwide',
      subTitle: 'Click to learn more',
    },
    {
      path: 'assets/icons/cycle.svg',
      title: 'Returns',
      subTitle: 'Return good in 30 days',
    },
    {
      path: 'assets/icons/creditCard.svg',
      title: 'Secured Payment',
      subTitle: 'Shop safely',
    },
  ];
}
