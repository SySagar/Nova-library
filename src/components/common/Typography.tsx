import { useEffect, useState } from "react";

interface Props {
  children: string;
  fontSize?: string;
  color?: string;
  position?: string;
  fontWeight?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export default function Typography({
  children,
  fontSize,
  color,
  fontWeight,
  position,
  left,
  right,
  top,
  bottom,
}: Props) {
  const [weight, setWeight] = useState(200);

  useEffect(() => {
    if (fontWeight === "light") {
      setWeight(200);
    } else if (fontWeight === "regular") {
      setWeight(400);
    } else if (fontWeight === "medium") {
      setWeight(700);
    } else if (fontWeight === "bold") {
      setWeight(900);
    }
  }, [fontWeight]);


  return (
    <div className="Typography">
      <p
        style={{
          fontFamily: "GraphikRegular",
          fontWeight: `${weight}`,
          fontSize: `${fontSize}px`,
          color: `${color}`,
          left: `${left}`,
          right: `${right}`,
          top: `${top}`,
          bottom: `${bottom}`,
          position: `${position}` as
            | "relative"
            | "absolute"
            | "fixed"
            | "sticky"
            | "static",
        }}
      >
        {children}
      </p>
    </div>
  );
}
