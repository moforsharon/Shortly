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
            code: "hello",
            short_link: "<BNKCHxLKJHSFJKNC",
            original_link: "jfkhalkh kjhsadlh asdhfd"

          }
        }];
   constructor(private linkService : LinkService) {}
     postLink(link: string) {
      this.linkService.postLink(link).subscribe((res : any) => (this.LINKS.push(res)));
      this.LINKS = this.LINKS
      console.log(this.LINKS)
  }

}
