import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { PresentationComponent } from "./presentation/presentation.component";
import { ComponentsComponent } from "./components/components.component";
import { SectionsComponent } from "./sections/sections.component";

const routes: Routes = [
  { path: "bitstory", component: PresentationComponent },
  { path: "letsplay", component: ComponentsComponent },
  { path: "share", component: SectionsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
