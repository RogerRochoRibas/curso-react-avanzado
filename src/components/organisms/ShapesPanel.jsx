import { React, useState, useEffect } from 'react'
import InteractiveShape from '../molecules/InteractiveShape';

export default function ShapesPanel() {
  const [Shape] = useState({
    shape1: { color: '#0000ff', size: 70 },
    shape2: { color: '#00ff15', size: 110 },
    shape3: { color: '#ff3333', size: 100 },
  });
  
  useEffect(() => {
    if (
      Shape.shape1.color === Shape.shape2.color &&
      Shape.shape1.color === Shape.shape3.color
    ) {
      alert('All shapes are the same color!');
    }
    if (
      Shape.shape1.size === Shape.shape2.size &&
      Shape.shape1.size === Shape.shape3.size
    ) {
      alert('All shapes are the same size!');
    }
  } ,[Shape.shape1.color, Shape.shape1.size, Shape.shape2.color, Shape.shape2.size, Shape.shape3.color, Shape.shape3.size]);

  return (
    <>
      <InteractiveShape
        defaultColor={Shape.shape1.color}
        defaultSize={Shape.shape1.size}
      >
        ▲
      </InteractiveShape>
      <InteractiveShape
        defaultColor={Shape.shape2.color}
        defaultSize={Shape.shape2.size}
      >
        ●
      </InteractiveShape>
      <InteractiveShape
        defaultColor={Shape.shape3.color}
        defaultSize={Shape.shape3.size}
      >
        ■
      </InteractiveShape>
    </>
  );
};
