import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { Species } from "../../features/pokedex/models/species.interface";

interface SpeciesListResponse {
  species: Species[];
}

@Injectable({
  providedIn: "root",
})
export class GetPokemonListService extends Query<SpeciesListResponse> {
  override document = gql`
    query pokemonList($limit: Int!, $offset: Int!) {
      species: pokemon_v2_pokemonspecies(
        order_by: { generation_id: asc, id: asc }
        limit: $limit
        offset: $offset
      ) {
        name
        id
        generation_id
      }
    }
  `;
}
