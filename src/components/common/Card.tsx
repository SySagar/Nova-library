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
  elevation?: string;
}

export default function Card({
  children,
  className,
  backgroundcolor,
  borderRadius,
  height,
  width,
  border,
  padding,
  margin,
}: Props) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        height: height ? `${height}` : "100%",
        width: width ? `${width}` : "100%",
        backgroundColor: `${backgroundcolor}`,
        borderRadius: `${borderRadius}px`,
        border: `${border}px solid #000`,
        padding: `${padding}px`,
        margin: `${margin}px`,
      }}
    >
      {children}
    </div>
  );
}
