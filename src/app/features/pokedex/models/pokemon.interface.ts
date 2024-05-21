export interface Pokemon {
  name: string;
  id: number;
  height: number;
  pokemon_species_id: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      id: number;
      pokemonV2TypeefficaciesByTargetTypeId: {
        damage_factor: number;
        pokemon_v2_type: {
          name: string;
        };
      }[];
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  abilities: {
    is_hidden: boolean;
    slot: number;
    pokemon_v2_ability: {
      name: string;
    };
  }[];
  species: {
    evolution_chain_id: number;
    pokemon_v2_evolutionchain: {
      pokemon_v2_pokemonspecies: {
        name: string;
      };
    };
  };
}
