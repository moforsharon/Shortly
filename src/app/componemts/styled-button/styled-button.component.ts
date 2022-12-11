import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-styled-button',
  templateUrl: './styled-button.component.html',
  styleUrls: ['./styled-button.component.css']
})
export class StyledButtonComponent {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Input() radius: string | undefined;
  @Input() padding: string | undefined;
  @Input() margin: string | undefined;
  @Input() visibility: string | undefined;

}