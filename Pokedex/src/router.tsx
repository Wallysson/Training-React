import { Routes, Route } from 'react-router-dom'
import { DetailsPokemon } from './pages/detailsPokemon'
import { Pokedex } from './pages/pokedex'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:name" element={<DetailsPokemon />} />
    </Routes>
  )
}
