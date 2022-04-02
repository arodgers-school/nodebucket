/*
Title: 
    WEB450 - nobucket: Sprint 1
Author: 
    Adam Rodgers
Date: 
    3/27/2022
Modified By: Adam Rodgers
Description: nodebucket
Resources:
    Bellevue University WEB450 Github Repo
*/

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-base-layout",
  templateUrl: "./base-layout.component.html",
  styleUrls: ["./base-layout.component.css"],
})
export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();
  isLoggedIn: boolean;
  name: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.isLoggedIn = this.cookieService.get("session_user") ? true : false;
  }

  ngOnInit(): void {
    this.name = sessionStorage.getItem("name");
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(["/session/signin"]);
  }
}
