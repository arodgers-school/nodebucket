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

import { HomeComponent } from "./pages/home/home.component";
import { BaseLayoutComponent } from "./shared/base-layout/base-layout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInGuard } from "./shared/sign-in.guard";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ContactComponent } from "./pages/contact/contact.component";

// Routes
const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        canActivate: [SignInGuard],
      },
      {
        path: "contact",
        component: ContactComponent,
        canActivate: [SignInGuard],
      },
    ],
  },
  {
    path: "session",
    component: AuthLayoutComponent,
    children: [
      {
        path: "signin",
        component: SignInComponent,
      },
    ],
  },
  
  // 404 Handler
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: "enabled", relativeLinkResolution: "legacy" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
