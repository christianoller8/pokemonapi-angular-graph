import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, map } from "rxjs";
import { Species } from "../../models/species.interface";
import { GetPokemonService } from "src/app/shared/implementations/get-pokemon.service";

@Component({
  selector: "app-pokemondetail",
  templateUrl: "./pokemondetail.component.html",
  styleUrls: ["./pokemondetail.component.scss"],
})
export class PokemonDetailComponent implements OnInit {
  visiblePokemon!: Observable<Species>;

  constructor(
    private route: ActivatedRoute,
    private getPokemon: GetPokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.visiblePokemon = this.getPokemon
        .watch({ id: routeParams["id"] })
        .valueChanges.pipe(map((result) => result.data.species));
    });
  }
}
