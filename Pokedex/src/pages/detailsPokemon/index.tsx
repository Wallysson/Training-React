import { Box, Typography, Container, Card, CardMedia } from '@mui/material'
import { PokemonDetails } from '../../@types/pokemonDetails'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AppBarComponent } from '../../components/AppBar'
import { CardWrapper } from '../pokedex/components/styles'

export function DetailsPokemon() {
  const [detailsPokemon, setDetailsPokemon] = useState<
    PokemonDetails | undefined
  >(undefined)
  const { name } = useParams()

  async function getSelectedPokemon() {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setDetailsPokemon(response.data)
      })
  }

  useEffect(() => {
    if (!name) return
    getSelectedPokemon()
  }, [name])

  return (
    <>
      <AppBarComponent />
      <Container maxWidth="md">
        <Box mt={4}>
          <Card
            sx={{
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
              padding: 4
            }}
          >
            <CardWrapper>
              <CardMedia
                component="img"
                width="50%"
                height="50%"
                image={detailsPokemon?.sprites.front_default}
                alt={detailsPokemon?.name}
              />

              <Box display="flex">
                <Typography>Nome: </Typography>
                <Typography>{detailsPokemon?.name}</Typography>
              </Box>
              <Box display="flex">
                <Typography>Tipo: </Typography>
                {detailsPokemon?.types.map(type => (
                  <Typography>{type.type.name}</Typography>
                ))}
              </Box>
              <Box display="flex">
                <Typography>Peso: </Typography>
                <Typography>{detailsPokemon?.weight}</Typography>
              </Box>
              <Box display="flex">
                <Typography>Altura: </Typography>
                <Typography>{detailsPokemon?.height}</Typography>
              </Box>
            </CardWrapper>
          </Card>
        </Box>
      </Container>
    </>
  )
}
