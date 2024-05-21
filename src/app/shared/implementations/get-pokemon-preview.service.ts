import { Injectable } from "@angular/core";
import { Query, gql } from "apollo-angular";
import { IPokemonPreview } from "src/app/features/landing/models/IPokemonPreview";

interface PokemonListResponse {
  pokemonPreviewList: IPokemonPreview[];
}

@Injectable({
  providedIn: "root",
})
export class GetPokemonPreviewService extends Query<PokemonListResponse> {
  override document = gql`
    query pokemonPreviewList($limit: Int!, $offset: Int!) {
      pokemonPreviewList: pokemon_v2_pokemon(limit: $limit, offset: $offset, order_by: {base_experience: desc}) {
        id
        name
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
        }
      }
    }
  `;
}
