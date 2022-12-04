import React from "react";
import { InteractiveShape } from "../molecules";

export const ShapesPanel = () => {
    
  return (
    <>
      <InteractiveShape defaultColor="#0000ff" defaultSize={70}>
        ▲
      </InteractiveShape>
      <InteractiveShape defaultColor="#00ff15" defaultSize={110}>
        ●
      </InteractiveShape>
      <InteractiveShape defaultColor="#FF3333" defaultSize={100}>
        ■
      </InteractiveShape>
    </>
  );
};
