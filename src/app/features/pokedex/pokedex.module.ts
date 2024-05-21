import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PokedexRoutingModule } from "./pokedex-routing.module";
import { PokedexComponent } from "./components/pokedex/pokedex.component";

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PokemonDetailComponent } from "./components/pokemondetail/pokemondetail.component";
import { MaterialModule } from "src/app/shared/components/material/material.module";

@NgModule({
  declarations: [PokedexComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    InfiniteScrollModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [PokedexComponent],
})
export class PokedexModule {}
