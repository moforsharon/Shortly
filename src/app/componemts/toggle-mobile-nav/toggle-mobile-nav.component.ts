import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {faList} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-toggle-mobile-nav',
  templateUrl: './toggle-mobile-nav.component.html',
  styleUrls: ['./toggle-mobile-nav.component.css']
})
export class ToggleMobileNavComponent implements OnInit {
  faList = faList;
  @Output() btnClick = new EventEmitter()
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.btnClick.emit();
  }

}
