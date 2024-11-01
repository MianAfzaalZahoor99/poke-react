export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}
