import axios from "axios";
import { PokemonDetails } from "../@types/pokemonDetails";
import { getPokemonDetails } from "./getPokemonDetails";

export interface PokemonListInterface {
  name: string;
  url: string;
}

export interface ListPokemonsInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonDetails[];
}


export async function pokedex(): Promise<ListPokemonsInterface> {
  const url = `https://pokeapi.co/api/v2/pokemon`;

  const response = await axios.get<ListPokemonsInterface>(url);

  const promiseArr = response.data.results.map(async (pokemon) => getPokemonDetails(pokemon.name));

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const resultsPromise = await Promise.all(promiseArr);

  return {
    ...response.data,
    results: resultsPromise

  };
}