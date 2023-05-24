interface Props {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  backgroundcolor?: string;
  borderRadius?: string;
  border?: string;
  height?: string;
  width?: string;
  padding?: string;
  gap?: string;
  margin?: string;
  elevation?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
}

export default function Card({
  children,
  className,
  id,
  backgroundcolor,
  borderRadius,
  height,
  width,
  border,
  padding,
  gap,
  margin,
  direction,
  justifyContent,
  alignItems,
}: Props) {
  return (
    <div
      className={className}
      id={id}
      style={{
        display: "flex",
        height: height ? `${height}` : "auto",
        width: width ? `${width}` : "auto",
        backgroundColor: `${backgroundcolor}`,
        borderRadius: `${borderRadius}px`,
        border: `${border}px solid #000`,
        padding: `${padding}px`,
        margin: `${margin}px`,
        flexDirection: `${direction}` as "row" | "column",
        gap: `${gap}px`,
        justifyContent: `${justifyContent}` as "flex-start" | "center" | "flex-end",
        alignItems: `${alignItems}` as "flex-start" | "center" | "flex-end",
      }}
    >
      {children}
    </div>
  );
}
