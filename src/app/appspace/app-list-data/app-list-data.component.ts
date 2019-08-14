import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URLSearchParams, Http, RequestOptions } from "@angular/http";
import { environment } from "../../../environments/environment";

import { Subscription } from "rxjs/internal/Subscription";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { CompileShallowModuleMetadata } from "@angular/compiler";
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: "app-app-list-data",
  templateUrl: "./app-list-data.component.html",
  styleUrls: ["./app-list-data.component.scss"]
})
export class AppListDataComponent {
  public gridData: any[] = [
    {
      id: 1,
      icon: "k-icon k-i-google font-size-25",
      source: "Google",
      name: "ABC Dental",
      address: "2101 California St",
      phone: "111.111.1111",
      rating: "3/5",
      listed: "Yes",
      status: 1
    },
    {
      id: 2,
      icon: "k-icon k-i-stumble-upon font-size-25",
      source: "Yelp",
      name: "ABC Dental",
      address: "2101 California St",
      phone: "111.111.1111",
      rating: "3/5",
      listed: "No",
      status: 2
    },
    {
      id: 3,
      icon: "k-icon k-i-yammer font-size-25",
      source: "Yahoo!",
      name: "ABC Dental",
      address: "2101 California St",
      phone: "111.111.1111",
      rating: "3/5",
      listed: "No",
      status: 2
    },
    {
      id: 4,
      icon: "k-icon k-i-rss-box font-size-25",
      source: "Foursquare",
      name: "ABC Dental",
      address: "2101 California St",
      phone: "111.111.1111",
      rating: "3/5",
      listed: "No",
      status: 1
    },
    {
      id: 5,
      icon: "k-icon k-i-facebook font-size-25",
      source: "Facebook",
      name: "ABC Dental",
      address: "2101 California St",
      phone: "111.111.1111",
      rating: "3/5",
      listed: "No",
      status: 1
    }
  ];

  result: any;
  login_check_url = environment.baseUrl + "facebook/is_logged_in";
  dialgData = []
  isShowUpdate: boolean = false;
  updatEXtractor: any;
  userId = '123456'
  currentRow: any;
  constructor(private http: Http, public sanitizer: DomSanitizer, private notificationService: NotificationService,
    private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let currentUrl = this.router.url;
    let accessUrl = currentUrl.split('#')
    if (accessUrl.length > 1) {
      let accessToken = currentUrl.split('#')[1].split('&')[0].split('=')[1]
      if (accessToken)
        this.posrtFbRe(accessToken)
    }

    let currentRoute = this.route.snapshot.url;
    this.isLoggedIn();
    this.previewURLSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.previewURL
    );
  }
  posrtFbRe(accessToken) {
    let postUrl = environment.baseUrl + 'facebook/register'
    let params = new URLSearchParams();
    params.set('access_token', accessToken)
    params.set('user_id', this.userId)
    this.post(postUrl, params).subscribe(result => {
      console.log("fbstatus : " + result);
      // if (result["is_logged_in"]) alert("Logged In");
      // else alert("Logged Out");
    });
  }
  // Read all REST Items
  isLoggedIn(): void {
    let params = new URLSearchParams();
    params.set('user_id', this.userId)
    this.get(this.login_check_url, params).subscribe(result => {
      result = result.json();
      this.result = result;
      this.isLoggedIn = result["is_logged_in"];
      console.log("status : " + result);
      // if (result["is_logged_in"]) alert("Logged In");
      // else alert("Logged Out");
    });
  }

  // Rest Items Service: Read all REST Items
  get(url: string, params) {
    let options = new RequestOptions({ search: params });
    return this.http.get(url, options).pipe(map(data => data));
  }
  post(url: string, params) {
    return this.http.post(url, params).pipe(map(data => data))
  }

  showThis: boolean;
  previewURL =
    "https://www.facebook.com/v4.0/dialog/oauth?client_id=1129569717238798&redirect_uri=https://growthplug-ui.herokuapp.com&response_type=token&state={user_id=678501}&scope=manage_pages";
  previewURLSafe: any;
  // opened: boolean;
  // constructor(private router: Router, public sanitizer: DomSanitizer) {}
  // ngOnInit() {
  //   this.previewURLSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
  //     this.previewURL
  //   );
  // }

  goToPage() {

    let params = new URLSearchParams();

    params.set('user_id', this.userId)
    let getPageUlr = environment.baseUrl + 'facebook/get_pages'
    this.showThis = true;
    this.get(getPageUlr, params).subscribe(result => {
      result = result.json();
      if(result['pages'])
      {
        this.dialgData = result['pages'];
        this.createExtractorForm();
      }
      else if(!result['is_logged_in'])
      this.goToLoginPage();
    });
  }

  createExtractorForm() {
    this.updatEXtractor = this.fb.group({
      website: new FormControl(''),
      phone: new FormControl(''),
      emails: new FormControl(''),
      about: new FormControl('')
    });
  }

  public close() {
    this.showThis = false;
    this.isShowUpdate = false;
  }

  goToLoginPage() {
    window.location.href = this.previewURL
  }
  showUpdate(dataItem) {
    this.isShowUpdate = true;
    this.currentRow = dataItem
  }
  onBack() {
    this.isShowUpdate = false;
  }
  onSubmit() {
    let website = this.updatEXtractor.get('website').value;
    let phone = this.updatEXtractor.get('phone').value;
    let emails = this.updatEXtractor.get('emails').value;
    let about = this.updatEXtractor.get('about').value;
    let pageToken = this.currentRow['access_token']
    let pageId = this.currentRow['id']
    let params = new URLSearchParams();
    params.set('user_id', this.userId)
    params.set('website', website)
    params.set('phone', phone)
    params.set('emails', emails)
    params.set('about', about)
    params.set('access_token', pageToken)
    params.set('page_id', pageId)
    let updateUrl = environment.baseUrl + 'facebook/update_page'
    this.post(updateUrl, params).subscribe(result => {
      result = result.json();
      this.isShowUpdate = false
      this.showThis = false
      this.currentRow = null
      if (result['success'])
      this.show();
    });
  }
  public show(): void {
    this.notificationService.show({
      content: 'Your data has been saved!',
      cssClass: 'button-notification',
      animation: { type: 'slide', duration: 400 },
      position: { horizontal: 'right', vertical: 'top' },
      type: { style: 'success', icon: true },
      hideAfter: 2000,
      closable: true
    });
  }
}
