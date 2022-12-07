import { React, useState, useEffect } from 'react'
import { InteractiveShape } from '../molecules'

export function ShapesPanel() {
  const [triangle, setTriangle] = useState({
    color: '#0000ff',
    size: 70,
  })
  const [circle, setCircle] = useState({
    color: '#00ff15',
    size: 110,
  })
  const [square, setSquare] = useState({
    color: '#ff3333',
    size: 100,
  })

  useEffect(() => {
    if (triangle.color === circle.color && triangle.color === square.color) {
      alert('All shapes are the same color!')
    }
  }, [triangle.color, circle.color, square.color])
  useEffect(() => {
    if (triangle.size === circle.size && triangle.size === square.size) {
      alert('All shapes are the same size!')
    }
  }, [triangle.size, circle.size, square.size])

  return (
    <>
      <InteractiveShape
        defaultColor="#0000ff"
        defaultSize={70}
        setShape={setTriangle}
        shape={triangle}
      >
        ▲
      </InteractiveShape>
      <InteractiveShape
        defaultColor="#00ff15"
        defaultSize={110}
        setShape={setCircle}
        shape={circle}
      >
        ●
      </InteractiveShape>
      <InteractiveShape
        defaultColor="#ff3333"
        defaultSize={100}
        setShape={setSquare}
        shape={square}
      >
        ■
      </InteractiveShape>
    </>
  )
}
