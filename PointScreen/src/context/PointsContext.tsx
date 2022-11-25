import { createContext, ReactNode } from 'react'
import { MouseEvent, useState } from 'react'

interface PointsContextType {
  handlePoint: (event: MouseEvent<HTMLDivElement>) => void
  handleResetPoints: () => void
  handleUndoPoints: () => void
  points: PointsProps[]
}

interface PointsProps {
  x: number
  y: number
}

export const PointsContext = createContext({} as PointsContextType)

interface PointsProviderProps {
  children: ReactNode
}

export function PointsProvider({ children }: PointsProviderProps) {
  const [points, setPoints] = useState<PointsProps[]>([])

  function handlePoint(event: MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = event
    setPoints([
      ...points,
      {
        x: clientX - 30,
        y: clientY - 160
      }
    ])
  }

  function handleUndoPoints() {
    const newPoints = [...points]
    newPoints.pop()
    setPoints(newPoints)
  }

  function handleResetPoints() {
    setPoints(points => [])
  }

  return (
    <PointsContext.Provider
      value={{ handlePoint, handleResetPoints, handleUndoPoints, points }}
    >
      {children}
    </PointsContext.Provider>
  )
}
