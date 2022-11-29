import styled from 'styled-components'
import { ListPokemonProps } from '..'
import { useNavigate } from 'react-router-dom'

interface PokedexCardProps {
  pokemon: ListPokemonProps
}

const Card = styled.section`
  padding: 4rem;
  border-radius: 0.5rem;
  background: papayawhip;
  cursor: pointer;
`

export function PokedexCard({ pokemon }: PokedexCardProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`)
  }
  return <Card onClick={handleClick}>{pokemon.name}</Card>
}
