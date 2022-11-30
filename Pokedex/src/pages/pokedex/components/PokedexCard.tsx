import { Card, CardMedia, Chip } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PokemonDetails } from '../../../@types/pokemonDetails'
import { CardWrapper, SCardHeader } from './styles'

interface PokedexCardProps {
  pokemon: PokemonDetails
}

export function PokedexCard({ pokemon }: PokedexCardProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`)
  }
  return (
    <Card onClick={handleClick} sx={{ padding: 4 }}>
      <CardWrapper>
        <CardMedia
          component="img"
          width="100%"
          height="100%"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <SCardHeader>
          <h3>{pokemon.name.toUpperCase()}</h3>
          <div>
            {pokemon.types.map(type => (
              <Chip label={type.type.name} variant="outlined" />
            ))}
          </div>
        </SCardHeader>
      </CardWrapper>
    </Card>
  )
}
