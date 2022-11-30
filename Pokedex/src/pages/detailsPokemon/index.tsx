import { Box, Typography, Container } from '@mui/material'
import { PokemonDetails } from '../../@types/pokemonDetails'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AppBarComponent } from '../../components/AppBar'

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
        <Box mt={2}>
          <img
            src={detailsPokemon?.sprites.front_default}
            alt={name}
            width="100%"
            height="auto"
          />
        </Box>
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
        <Box display="flex">
          <Typography>Habilidades: </Typography>
          {detailsPokemon?.abilities.map(ability => (
            <Typography>{ability.ability.name}</Typography>
          ))}
        </Box>
      </Container>
    </>
  )
}
