import { Component, OnInit } from "@angular/core";
import { Observable, map } from "rxjs";
import { IPokemonPreview } from "../../models/IPokemonPreview";
import { GetPokemonPreviewService } from "src/app/shared/implementations/get-pokemon-preview.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  pokemonList$!: Observable<IPokemonPreview[]>;

  allPokemons : IPokemonPreview[] = [];

  active = 2;

  constructor(private getPokemonList: GetPokemonPreviewService) {}

  ngOnInit(): void {

    const offset = Math.floor(Math.random() * 1000);
    
    this.pokemonList$ = this.getPokemonList
    .watch({ limit: 10, offset: offset })
    .valueChanges
    .pipe(map((result) =>  result.data.pokemonPreviewList));

    this.pokemonList$.subscribe((data) => {
      this.allPokemons = data;
      console.log(this.allPokemons);
    });
    
    
  }

  prev(){

    const last = this.allPokemons[this.allPokemons.length - 1];
    
    this.allPokemons = this.allPokemons.slice(0, this.allPokemons.length -1);

    this.allPokemons = [last, ...this.allPokemons];

  }

  next(){
   
    const first = this.allPokemons[0];

    this.allPokemons = this.allPokemons.slice(1,this.allPokemons.length);

    this.allPokemons = [...this.allPokemons, first];
  }

}
