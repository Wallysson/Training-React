import axios from 'axios'
import { useEffect, useState } from 'react'

interface ListPokemonProps {
  name: string
  url: string
}

export function Pokedex() {
  const [listPokemons, setListPokemons] = useState<ListPokemonProps[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<
    ListPokemonProps | undefined
  >(undefined)
  const [detailsPokemon, setDetailsPokemon] = useState<any | undefined>(
    undefined
  )

  async function getPokedex() {
    await axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => {
      setListPokemons(response.data.results)
    })
  }

  async function getSelectedPokemon() {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon?.name}`)
      .then(response => {
        setDetailsPokemon(response.data)
      })
  }

  useEffect(() => {
    getPokedex()
  }, [])

  useEffect(() => {
    if (!selectedPokemon) return

    getSelectedPokemon()
  }, [selectedPokemon])

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      {listPokemons.map((pokemon, index) => (
        <button key={index} onClick={() => setSelectedPokemon(pokemon)}>
          {pokemon.name}
        </button>
      ))}
      <h2>
        Pokémon selecionado:{' '}
        {selectedPokemon?.name || 'Nenhum Pokémon Selecionado'}
      </h2>
      {JSON.stringify(detailsPokemon, undefined, 2)}
    </div>
  )
}
