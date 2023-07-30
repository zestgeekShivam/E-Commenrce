import { Component } from '@angular/core';
import Config from '../services/config.json';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  config = Config;
}
