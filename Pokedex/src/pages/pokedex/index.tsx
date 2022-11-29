import axios from 'axios'
import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container, Grid } from '@mui/material'
import { PokedexCard } from './components/PokedexCard'

export interface ListPokemonProps {
  name: string
  url: string
}

export function Pokedex() {
  const [listPokemons, setListPokemons] = useState<ListPokemonProps[]>([])

  async function getPokedex() {
    await axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => {
      setListPokemons(response.data.results)
    })
  }

  useEffect(() => {
    getPokedex()
  }, [])

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth="md">
        <Box mt={2}>
          <Grid container spacing={2} mt={2}>
            {listPokemons.map((pokemon, index) => (
              <>
                <Grid item xs={6} lg={3}>
                  {/* <Card
                    key={index}
                    onClick={() => handleClick(pokemon)}
                    variant="outlined"
                  >
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {pokemon.name.toUpperCase()}
                      </Typography>
                    </CardContent>
                  </Card> */}
                  <PokedexCard pokemon={pokemon} />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
