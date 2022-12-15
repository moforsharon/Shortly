import { Component  ,OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { Link } from 'src/app/Links';
import { LinkService } from 'src/app/services/link.service';
import { LINKS } from 'src/app/LinkCollection';
@Component({
  selector: 'app-shortened-link',
  templateUrl: './shortened-link.component.html',
  styleUrls: ['./shortened-link.component.css']
})
export class ShortenedLinkComponent {
   @Output() onAddLink: EventEmitter<string> = new EventEmitter()
   @Input() link!: Link
   //link: string = ""
   subscription!: Subscription;
   LINKS: Link[] = [];

   constructor(private linkService : LinkService) {}
     postLink(link: string) {
      this.linkService.postLink(link).subscribe((res : any) => (this.LINKS.push(res)));
      console.log(this.LINKS)
  }
}
