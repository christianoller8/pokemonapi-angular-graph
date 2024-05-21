import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { PokemonDetailComponent } from "./components/pokemondetail/pokemondetail.component";

const routes: Routes = [
  { path: "", component: PokedexComponent },
  { path: "pokemon/:id", component: PokemonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
