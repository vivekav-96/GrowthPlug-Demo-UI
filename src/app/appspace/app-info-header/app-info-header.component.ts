import { Component } from '@angular/core';

@Component({
  selector: 'app-app-info-header',
  templateUrl: './app-info-header.component.html',
  styleUrls: ['./app-info-header.component.scss']
})
export class AppInfoHeaderComponent  {
 
  public listItems: Array<string> = ["San Jose, CA",];
  selectedValue = 'San Jose, CA'
  }
