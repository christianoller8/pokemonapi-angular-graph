import { Component, Input } from "@angular/core";
import { IPokemonPreview } from "../../models/IPokemonPreview";

@Component({
  selector: "app-carousel-item",
  templateUrl: "./carousel-item.component.html",
  styleUrls: ["./carousel-item.component.scss"],
})
export class CarouselItemComponent {
  @Input() pokemonPreview: IPokemonPreview = {} as IPokemonPreview;
  @Input() position = 0;
  @Input() activePosition = 0;
}
