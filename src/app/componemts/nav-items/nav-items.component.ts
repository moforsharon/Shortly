import { Component } from '@angular/core';
import {UiServiceService} from '../../services/ui-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.css']
})
export class NavItemsComponent {
    showAddTask!: boolean;
  subscription: Subscription;
    constructor(private uiServiceService: UiServiceService){
     this.subscription = this.uiServiceService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit() : void {}

}
