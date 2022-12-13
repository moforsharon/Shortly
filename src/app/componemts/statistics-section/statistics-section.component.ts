import { Component } from '@angular/core';
import { LinkService } from '../../services/link.service';
import {Link} from '../../Links';
@Component({
  selector: 'app-statistics-section',
  templateUrl: './statistics-section.component.html',
  styleUrls: ['./statistics-section.component.css']
})
export class StatisticsSectionComponent {
        LINKS: Link[] = [{
          ok: true,
          result: {
                    code: "1",
        short_link: "hello",
        original_link: "hi"
          }
      }];
   constructor(private linkService : LinkService) {}
     postLink(link: string) {
      this.linkService.postLink(link).subscribe((res : any) => (this.LINKS.push(res)));
      console.log(this.LINKS)
  }
}
