import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Container, Grid } from '@mui/material'
import { PokedexCard } from './components/PokedexCard'
import { PokemonDetails } from '../../@types/pokemonDetails'
import { pokedex } from '../../services/listPokemons'
import { AppBarComponent } from '../../components/AppBar'

export function Pokedex() {
  const [listPokemons, setListPokemons] = useState<PokemonDetails[]>([])
  const [nextUrl, setNextUrl] = useState<string | undefined>(undefined)
  const [previousUrl, setPreviousUrl] = useState('')

  async function next() {
    let data = pokedex().then(response => {
      console.log(response.next)
    })
  }

  useEffect(() => {
    pokedex().then(response => setListPokemons(response.results))
  }, [])

  return (
    <div>
      <AppBarComponent />
      <Container maxWidth="md">
        <Box mt={2}>
          <Grid container spacing={2} mt={2}>
            {listPokemons.map((pokemon, index) => (
              <Grid item xs={6} lg={3} key={index}>
                <PokedexCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
