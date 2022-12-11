import { Component } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title : string  = 'Shortly';
 showAddTask!: boolean;
 subscription!: Subscription;

  constructor(private uiService:UiServiceService) {
  this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
 }
 ngOnInit(): void {}

  toggleShowNav(): void {
  this.uiService.toggleShowNav();
 }
}
