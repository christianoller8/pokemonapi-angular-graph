import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";

import { DetailsModule } from "./details/details.module";
import { LandingModule } from "./landing/landing.module";
import { PokedexModule } from "./pokedex/pokedex.module";
import { DetailsPageComponent } from "./details/components/details-page/details-page.component";
import { LandingPageComponent } from "./landing/components/landing-page/landing-page.component";
import { PokedexComponent } from "./pokedex/components/pokedex/pokedex.component";
import { LoginModule } from "./login/login.module";
import { MaterialModule } from "../shared/components/material/material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    LoginModule,
    DetailsModule,
    LandingModule,
    PokedexModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [DetailsPageComponent, LandingPageComponent, PokedexComponent],
})
export class FeaturesModule {}
