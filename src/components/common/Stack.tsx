interface Props {
  children?: React.ReactNode;
  className?: string;
  backgroundcolor?: string;
  borderRadius?: string;
  border?: string;
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  direction?: string;
  position?: string;
  justifyContent?: string;
  alignItems?: string;
  flexGrow?: string;
  flexShrink?: string;
  gap?: string;
}

export default function Stack({
  children,
  className,
  backgroundcolor,
  borderRadius,
  height,
  width,
  border,
  direction,
  padding,
  margin,
  position,
  justifyContent,
  alignItems,
  flexGrow,
  gap,
  flexShrink,
}: Props) {
  return (
    <div
      className={className}
      style={{
        position: `${position}` as
          | "absolute"
          | "relative"
          | "fixed"
          | "sticky"
          | "static",
        display: "flex",
        flexGrow: `${flexGrow}`,
        flexShrink: `${flexShrink}`,
        height: height ? `${height}` : "100%",
        width: width ? `${width}` : "100%",
        backgroundColor: `${backgroundcolor}`,
        borderRadius: `${borderRadius}px`,
        border: `${border}px solid #000`,
        padding: `${padding}px`,
        margin: `${margin}px`,
        gap: `${gap}px`,
        flexDirection: `${direction}` as "row" | "column",
        justifyContent: `${justifyContent}` as
          | "center"
          | "flex-start"
          | "flex-end"
          | "space-between"
          | "space-around"
          | "space-evenly"
          | "stretch",
        alignItems: `${alignItems}` as
          | "center"
          | "flex-start"
          | "flex-end"
          | "space-between"
          | "space-around"
          | "space-evenly"
          | "stretch",
      }}
    >
      {children}
    </div>
  );
}
