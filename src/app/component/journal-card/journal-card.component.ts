import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-journal-card',
  templateUrl: './journal-card.component.html',
  styleUrls: ['./journal-card.component.scss'],
})
export class JournalCardComponent {
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() alt: string = '';
  @Input() image: string = '';
  @Input() link: string = '';
  @Input() excerpt: string = '';
}
