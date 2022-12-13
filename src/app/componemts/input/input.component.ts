import { Component,Output, Input, EventEmitter } from '@angular/core';
import {UiServiceService} from '../../services/ui-service.service'; 
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  
   @Input() border: string | undefined;
   link: string | undefined;
   subscription: Subscription | undefined;
   constructor(){}
 ngOnInit() : void {}

}
