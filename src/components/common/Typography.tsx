import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  fontSize?: string;
  color?: string;
  position?: string;
  fontWeight?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  textAlign?: string;
  border?: string;
  height?: string;
  width?: string;
  margin?: string;
  lineHeight?: string;
  justifyContent?: string;
  alignItems?: string;
}

export default function Typography({
  children,
  className,
  fontSize,
  color,
  fontWeight,
  position,
  left,
  right,
  border,
  top,
  bottom,
  textAlign,
  height,
  width,
  margin,
  lineHeight,
  justifyContent,
  alignItems,
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
    <div
      className={className}
      style={{
        border: border ? "1px solid #000" : "0px",
        height: `${height}`,
        width: `${width}`,
        margin: `${margin}`,
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`,
      }}
    >
      <p
        style={{
          fontFamily: "GraphikRegular",
          fontWeight: `${weight}`,
          fontSize: `${fontSize}px`,
          textAlign: `${textAlign}` as "left" | "right" | "center" | "justify",
          color: `${color}`,
          left: `${left}`,
          right: `${right}`,
          top: `${top}`,
          bottom: `${bottom}`,
          lineHeight: `${lineHeight}`,
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
