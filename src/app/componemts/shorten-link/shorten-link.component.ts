import { Component  ,OnInit, Output, EventEmitter} from '@angular/core';
import {UiServiceService} from '../../services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shorten-link',
  templateUrl: './shorten-link.component.html',
  styleUrls: ['./shorten-link.component.css']
})
export class ShortenLinkComponent {
   @Output() onAddLink: EventEmitter<string> = new EventEmitter()
   link: string = "."
   subscription: Subscription | undefined;
   constructor(){}
 ngOnInit() : void {}

    onSubmit() {
    // if(!this.link){
    //   alert("Please add a link")
    // }
    const newLink = this.link;
    this.onAddLink.emit(newLink)


}
}
