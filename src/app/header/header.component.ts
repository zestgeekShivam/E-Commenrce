import { Component } from '@angular/core';
import Config from '../services/config.json';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  category = [
    {
      categoryName: 'MEN',
      categoryItems: [
        'All Clothing',
        'Sweatshirts & Hoodies',
        'Jackets',
        'Trousers',
        'Pants',
      ],
    },
    {
      categoryName: 'WOMAN',
      categoryItems: [
        'All Clothing',
        'Sweatshirts & Hoodies',
        'Jackets',
        'Trousers',
      ],
    },
    {
      categoryName: 'ACCESSORIES',
      categoryItems: ['Caps & Scarves', 'Bags'],
    },
  ];
  config = Config;
  isShowDropdown = false;

  handleShowDropSown(show: boolean): void {
    let element = document.getElementsByClassName('shop-dropdown')[0];
    if (show) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
    this.isShowDropdown = show;
  }

  mobileMenu: boolean = false;
  mobileMenuIcon: string = 'assets/icons/burger.svg';

  handleNavMenuIcon() {
    this.mobileMenu = !this.mobileMenu;
    this.mobileMenuIcon = this.mobileMenu
      ? 'assets/icons/cross.svg'
      : 'assets/icons/burger.svg';
  }
}
