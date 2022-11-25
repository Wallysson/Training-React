import { useContext } from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Whiteboard } from '../components/Whiteboard'
import { PointsContext } from '../context/PointsContext'
import '../styles/main.css'

export function Home() {
  const { handleUndoPoints, handleResetPoints } = useContext(PointsContext)

  return (
    <div
      className="max-w-[1320px] w-full mx-auto flex 
    flex-col items-center mt-8 h-screen relative"
    >
      <Header />

      <main className="mt-4 w-full p-4 h-3/4 drop-shadow-md">
        <Whiteboard />
        <div className="mt-8 flex items-center justify-center gap-4	">
          <Button text="Undo" onClick={handleUndoPoints} />
          <Button text="Restart" onClick={handleResetPoints} />
        </div>
      </main>
    </div>
  )
}
