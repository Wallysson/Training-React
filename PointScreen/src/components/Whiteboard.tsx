import { useContext } from 'react'
import { PointsContext } from '../context/PointsContext'

export function Whiteboard() {
  const { handlePoint, points } = useContext(PointsContext)

  return (
    <div
      className="bg-white w-full h-full rounded-md border-solid 
      outline-sky-900 outline-4 outline outline-offset-4 relative"
      onClick={handlePoint}
    >
      {points.map((point, index) => (
        <div
          key={index}
          className="absolute inline-block rounded-full bg-sky-800 w-2 h-2"
          style={{ left: point.x + 'px', top: point.y + 'px' }}
        ></div>
      ))}
    </div>
  )
}
