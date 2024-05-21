import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { GetPokemonListService } from "src/app/shared/implementations/get-pokemon-list.service";
import { Species } from "src/app/features/pokedex/models/species.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "src/app/shared/implementations/auth.service";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  pokemon: Species[] = [];
  visiblePokemon: Species[] = [];
  increment = 16;
  showLoadMoreBtn = false;
  firstLoad = true;

  role="";

  @ViewChild("loadMoreBtn") loadMoreBtn!: ElementRef;

  constructor(private getPokemonList: GetPokemonListService, private authService : AuthService) {}

  ngOnInit(): void {
    this.getPokemonList
      .watch({ limit: 1000, offset: 0 })
      .valueChanges.pipe(map((result) => result.data.species))
      .subscribe((data) => {
        // console.log(data);
        this.pokemon = data;
        this.loadMore();
        this.firstLoad = false;
        this.showLoadMoreBtn = true;
      });

    window.addEventListener("scroll", this.onScroll.bind(this));

    this.role = this.authService.currentRol();
  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.onScroll.bind(this));
  }

  onScroll(event: Event) {
    const elem = this.loadMoreBtn.nativeElement;
    const docHeight = document.documentElement.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPos =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0);

    // verifica si el usuario ha alcanzado el final de la página y carga más pokémon si es así
    if (scrollPos + winHeight >= docHeight - elem.clientHeight) {
      this.loadMore();
    }
  }

  loadMore() {
    const nextPokemon = this.pokemon.slice(
      this.visiblePokemon.length,
      this.visiblePokemon.length + this.increment
    );
    this.visiblePokemon.push(...nextPokemon);

    // verifica si se han cargado todos los pokémon
    if (this.visiblePokemon.length >= this.pokemon.length) {
      this.showLoadMoreBtn = false;
    }
  }

  onLoadMoreBtnClick() {
    this.firstLoad = false;
    this.loadMore();
  }
}
