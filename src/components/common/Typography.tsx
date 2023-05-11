import "../fonts/GraphikLight.otf";
import "../fonts/GraphikRegular.otf";
import "../fonts/GraphikMedium.otf";
import "../fonts/GraphikBold.otf";
import { useState } from "react";

interface Props {
  children: string;
  fontSize?: string;
  Tcolor?: string;
}

export default function Typography(
  { children }: Props,
  fontSize: Props,
  Tcolor: string
) {
  const [font, setFont] = useState("light");

  if (font === "light") {
    setFont("GraphikLight");
  } else if (font === "regular") {
    setFont("GraphikRegular");
  } else if (font === "medium") {
    setFont("GraphikMedium");
  } else if (font === "bold") {
    setFont("GraphikBold");
  }

  const [textColor, setTextColor] = useState("black");

  if (Tcolor === "black") {
    setTextColor("#000000");
  } else if (Tcolor === "white") {
    setTextColor("#FFFFFF");
  } else if (Tcolor === "grey") {
    setTextColor("#808080");
  }

  return (
    <div className="Typography">
      <p
        style={{
          fontFamily: `${font}`,
          fontSize: `${fontSize}px`,
          color: `${textColor}`,
        }}
      >
        {children}
      </p>
    </div>
  );
}
