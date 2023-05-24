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
  display?: string;
  paddingbottom?: string;
  paddingleft?: string;
  paddingright?: string;
  paddingtop?: string;
  marginbottom?: string;
  marginleft?: string;
  marginright?: string;
  margintop?: string;
  paddingx?: string;
  paddingy?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  wordWrap?: string;
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
  display,
  paddingbottom,
  paddingleft,
  paddingright,
  paddingtop,
  marginbottom,
  marginleft,
  marginright,
  margintop,
  paddingx,
  paddingy,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
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
        display: display ? `${display}` as "flex" | "block" | "inline" | "inline-block" | "none" : "flex",
        flexGrow: `${flexGrow}`,
        flexShrink: `${flexShrink}`,
        height: height ? `${height}` : "auto",
        width: width ? `${width}` : "auto",
        minWidth: minWidth ? `${minWidth}` : "auto",
        maxWidth: maxWidth ? `${maxWidth}` : "auto",
        minHeight: minHeight ? `${minHeight}` : "auto",
        maxHeight: maxHeight ? `${maxHeight}` : "auto",
        backgroundColor: `${backgroundcolor}`,
        borderRadius: `${borderRadius}px`,
        border: border ? bordercolor ? `${border}px solid ${bordercolor}`: `${border}px solid #000` : '0px',
        padding: `${padding}px`,
        paddingLeft: `${paddingleft}px`,
        paddingRight: `${paddingright}px`,
        paddingTop: `${paddingtop}px`,
        paddingBottom: `${paddingbottom}px`,
        paddingInline: `${paddingx}px`,
        paddingBlock: `${paddingy}px`,
        marginBottom: `${marginbottom}px`,
        marginLeft: `${marginleft}px`,
        marginRight: `${marginright}px`,
        marginTop: `${margintop}px`,
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
