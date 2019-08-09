import { Component,  ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-app-list-data',
  templateUrl: './app-list-data.component.html',
  styleUrls: ['./app-list-data.component.scss']
})
export class AppListDataComponent  {
  public gridData: any[] = [
    {
      id:1,
      icon:'k-icon k-i-google font-size-25',
      source:'Google',
      name:'ABC Dental',
      address:'2101 California St',
      phone:'111.111.1111',
      rating:'3/5',
      listed:'Yes',
      status:1,

    },
    {
      id:2,
      icon:'k-icon k-i-stumble-upon font-size-25',
      source:'Yelp',
      name:'ABC Dental',
      address:'2101 California St',
      phone:'111.111.1111',
      rating:'3/5',
      listed:'No',
      status:2,

    },
    {
      id:3,
      icon:'k-icon k-i-yammer font-size-25',
      source:'Yahoo!',
      name:'ABC Dental',
      address:'2101 California St',
      phone:'111.111.1111',
      rating:'3/5',
      listed:'No',
      status:2,

    },
    {
      id:4,
      icon:'k-icon k-i-rss-box font-size-25',
      source:'Foursquare',
      name:'ABC Dental',
      address:'2101 California St',
      phone:'111.111.1111',
      rating:'3/5',
      listed:'No',
      status:1,

    },
    {
      id:5,
      icon:'k-icon k-i-facebook font-size-25',
      source:'Facebook',
      name:'ABC Dental',
      address:'2101 California St',
      phone:'111.111.1111',
      rating:'3/5',
      listed:'No',
      status:1,
    }
  ];
  showThis: boolean;
  previewURL = 'https://www.facebook.com/v4.0/dialog/oauth?client_id=1129569717238798&redirect_uri=https://growthplug-demo.herokuapp.com/facebook/is_logged_in&display=popup&response_type=token&state={st=state123abc,ds=123456789}'
  previewURLSafe: any;
  opened: boolean;
constructor(private router:Router,public sanitizer: DomSanitizer){}
ngOnInit()
{
  this.previewURLSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.previewURL);
}
  goToPage()
  {
    this.showThis = true;
  }
  public close() {
    
    this.showThis = false;
  }

}
