import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { PresentationComponent } from "./presentation/presentation.component";
import { ComponentsComponent } from "./components/components.component";
import { SectionsComponent } from "./sections/sections.component";
import { DlcComponent } from "./dlc/dlc.component";
import { StoreComponent } from "./store/store.component";
import { ClanClubComponent } from "./clanclub/clanclub.component";

const routes: Routes = [
  { path: "bitstory", component: PresentationComponent },
  { path: "letsplay", component: ComponentsComponent },
  { path: "share", component: SectionsComponent },
  { path: "dlc", component: DlcComponent },
  { path: "store", component: StoreComponent },
  { path: "clanclub", component: ClanClubComponent },
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
