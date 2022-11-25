import { PointsProvider } from './context/PointsContext'
import { Home } from './pages/Home'

export function App() {
  return (
    <PointsProvider>
      <Home />
    </PointsProvider>
  )
}
