import { Component } from '@angular/core';
import { UiServiceService } from '../../services/ui-service.service'; 
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {
  showAddTask!: boolean;
  subscription: Subscription;
    constructor(private uiService: UiServiceService){
     this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }
}
