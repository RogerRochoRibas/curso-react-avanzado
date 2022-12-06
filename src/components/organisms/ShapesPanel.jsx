import React from "react";
import { InteractiveShape } from "../molecules";
import { useState } from "react";
import { useEffect } from "react";

export const ShapesPanel = () => {
  // Debería de ser shape y setShape, no Shape. Utiliza camelCase
  const [Shape, setShape] = useState({
    shape1: { color: "#0000ff", size: 70 },
    shape2: { color: "#00ff15", size: 110 },
    shape3: { color: "#ff3333", size: 100 },
  });

  function modifyShape(shape, parameter, value) {
    let newShape = { ...Shape };
    newShape.shape.parameter = value; // Aquí parece que estas mutando el estado y además shape no es una propiedad de Shape. Deberías mejroar también la sintaxis para que sea más fácil. Sospecho aquí esta el error principal.
    setShape(newShape);
  }

  useEffect(() => {
    console.log("Shape", Shape);
    if (
      Shape.shape1.color === Shape.shape2.color &&
      Shape.shape1.color === Shape.shape3.color
    ) {
      alert("All shapes are the same color!");
    }
    if (
      Shape.shape1.size === Shape.shape2.size &&
      Shape.shape1.size === Shape.shape3.size
    ) {
      alert("All shapes are the same size!");
    }
  }, [Shape]);

  return (
    <>
      <InteractiveShape
        defaultColor={Shape.shape1.color}
        defaultSize={Shape.shape1.size}
        modifyShape={modifyShape}
        shape="shape1"
      >
        {/* Interesante usar las formas de esta manera. */}▲
      </InteractiveShape>
      <InteractiveShape
        defaultColor={Shape.shape2.color}
        defaultSize={Shape.shape2.size}
        modifyShape={modifyShape}
        shape="shape2"
      >
        ●
      </InteractiveShape>
      <InteractiveShape
        defaultColor={Shape.shape3.color}
        defaultSize={Shape.shape3.size}
        modifyShape={modifyShape}
        shape="shape3"
      >
        ■
      </InteractiveShape>
    </>
  );
};
