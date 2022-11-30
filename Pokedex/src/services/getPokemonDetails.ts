import axios from "axios";
import { PokemonDetails } from "../@types/pokemonDetails";

export async function getPokemonDetails(name: string): Promise<PokemonDetails> {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const response = await axios.get<PokemonDetails>(url);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return response.data;
}