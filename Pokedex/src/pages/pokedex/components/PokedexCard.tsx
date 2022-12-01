import { Card, CardMedia, Chip } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PokemonDetails } from '../../../@types/pokemonDetails'
import { pokemonTypeColors } from '../../../helpers/pokemonTypeColors'
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
    <Card onClick={handleClick} sx={{ padding: 4, cursor: 'pointer' }}>
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
            {pokemon.types.map((type, index) => (
              <Chip
                label={type.type.name}
                variant="outlined"
                key={index}
                style={{
                  backgroundColor: pokemonTypeColors[type.type.name],
                  color: 'white'
                }}
              />
            ))}
          </div>
        </SCardHeader>
      </CardWrapper>
    </Card>
  )
}
