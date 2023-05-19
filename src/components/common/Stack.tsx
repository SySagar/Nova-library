interface Props {
  children?: React.ReactNode;
  className?: string;
  backgroundcolor?: string;
  borderRadius?: string;
  border?: string;
  bordercolor?: string;
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
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
  id?: string;
}

export default function Stack({
  children,
  className,
  backgroundcolor,
  borderRadius,
  bordercolor,
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
  right,
  left,
  top,
  bottom,
  flexShrink,
  id,
}: Props) {
  return (
    <div
      id={id}
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
        height: height ? `${height}` : "auto",
        width: width ? `${width}` : "auto",
        backgroundColor: `${backgroundcolor}`,
        borderRadius: `${borderRadius}px`,
        border: border ? bordercolor ? `${border}px solid ${bordercolor}`: `${border}px solid #000` : '0px',
        padding: `${padding}px`,
        margin: `${margin}px`,
        gap: `${gap}px`,
        right: right ? `${right}px` : "0px",
        left: left ? `${left}px` : "0px",
        top: top ? `${top}px` : "0px",
        bottom: bottom ? `${bottom}px` : "0px",
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
