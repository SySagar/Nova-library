interface AvatarProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  margin?: string;
  padding?: string;
}
export default function Avatar({
  src,
  alt,
  width,
  height,
  borderRadius,
  border,
  margin,
  padding,
}: AvatarProps) {
  return (
    <div className="avatar" style={{ margin: 0 }}>
      <img
        style={{
          borderRadius: borderRadius ? `${borderRadius}px` : "100%",
          width: width ? `${width}px`: '30px',
          height: height? `${height}px`: '30px',
          padding: `${padding}px`,
          margin: `${margin}px`,
          objectFit: "cover",
          border: border ? `${border}px solid black` : "none",
        }}
        src={src}
        alt={alt}
      />
    </div>
  );
}
