import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() url: string | undefined
  @Input() cardTitle: string | undefined
  @Input() cardText: string | undefined
  @Input() position: string | undefined
  @Input() top: string | undefined
}
