import { IPokemonAbility } from "./IPokemonAbility";
import { IPokemonType } from "./IPokemonType";

export interface IPokemonPreview{
    id: number;
    name : string;
    pokemon_v2_pokemonabilities: {
        pokemon_v2_ability: IPokemonAbility
    }[];
    pokemon_v2_pokemontypes: {
        pokemon_v2_type: IPokemonType

    }[];
}
