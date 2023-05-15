interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  position?: string;
  border?: string;
  borderRadius?: string;
  bordercolor?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  icon?: React.ReactNode;
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
}

export default function Button({
  children,
  className,
  position,
  border,
  borderRadius,
  bordercolor,
  width,
  height,
  padding,
  margin,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  icon,
  right,
  left,
  top,
  bottom,
}: ButtonProps) {
  return (
    <div className="button">
      <div className="icon">{icon}</div>

      <button
        className={className}
        style={{
          position: `${position}` as
            | "absolute"
            | "relative"
            | "fixed"
            | "sticky"
            | "static",
          display: "flex",
          height: height ? `${height}` : "100%",
          width: width ? `${width}` : "100%",
          backgroundColor: `${backgroundColor}`,
          color: `${color}`,
          fontSize: `${fontSize}`,
          fontWeight: `${fontWeight}`,
          borderRadius: `${borderRadius}px`,
          border: border
            ? bordercolor
              ? `${border}px solid ${bordercolor}`
              : `${border}px solid #000`
            : "0px",
          padding: `${padding}px`,
          margin: `${margin}px`,
          right: right ? `${right}px` : "0px",
          left: left ? `${left}px` : "0px",
          top: top ? `${top}px` : "0px",
          bottom: bottom ? `${bottom}px` : "0px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </button>
    </div>
  );
}
