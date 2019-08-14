import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-app-menu",
  templateUrl: "./app-menu.component.html",
  styleUrls: ["./app-menu.component.scss"]
})
export class AppMenuComponent {
  public data: any[] = [
    {
      text: "Dashboard",
      icon: "k-icon k-i-delicious"
    },
    {
      text: "Website",
      icon: "k-icon k-i-globe-outline"
    },
    {
      text: "Visitors",
      icon: "k-icon k-i-marker-pin"
    },
    {
      text: "Reviews",
      icon: "k-icon k-i-star-outline k-i-bookmark-outline"
    },
    {
      text: "Listings",
      icon: "k-icon k-i-list-unordered k-i-list-bulleted"
    },
    {
      text: "Appointments",
      icon: "k-icon k-i-calendar-date"
    },
    {
      text: "Settings",
      icon: "k-icon k-i-gear k-i-cog k-i-custom"
    }
  ];

  selectedKeys = ["4"];
}
