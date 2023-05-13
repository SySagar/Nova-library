import "../../App.css";
import { ReactNode, useState } from "react";

interface TextfieldProps {
  className?: string;
  backgroundcolor?: string;
  borderRadius?: string;
  border?: string;
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  flexGrow?: string;
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
  placeholder?: string;
  handleCallBack?: any;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export default function Textfield({
  className,
  backgroundcolor,
  borderRadius,
  height,
  width,
  border,
  padding,
  margin,
  position,
  placeholder,
  right,
  left,
  top,
  bottom,
  iconLeft,
  iconRight,
  handleCallBack,
}: TextfieldProps) {
  const [active, setActive] = useState(true);

  return (
    <div
      id="textField"
      style={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
      }}
    >
      {iconLeft && (
        <div
          className="icon"
          style={{ position: "absolute", left: "2" }}
        >
          {iconLeft}
        </div>
      )}

      {iconRight && (
        <div className="icon" style={{ position: "absolute", right: "2" }}>
          {iconRight}
        </div>
      )}

      <input
        className={className}
        placeholder={placeholder}
        onFocus={() => {
          document.getElementById("textField")!.style.outline = "none";
          setActive((active) => !active);
          handleCallBack(active);
        }}
        style={{
          position: `${position}` as
            | "absolute"
            | "relative"
            | "fixed"
            | "sticky"
            | "static",
          display: "flex",
          fontFamily: "GraphikRegular",
          fontSize: "16px",
          width: width ? `${width}` : "100%",
          height: height ? `${height}` : "100%",
          flexGrow: 1,
          right: right ? `${right}px` : "0px",
          left: left ? `${left}px` : "0px",
          top: top ? `${top}px` : "0px",
          bottom: bottom ? `${bottom}px` : "0px",
          backgroundColor: `${backgroundcolor}`,
          borderRadius: `${borderRadius}px`,
          border: border ? `${border}px solid #000` : "0px",
          padding: `${padding}px`,
          margin: `${margin}px`,
        }}
        name="myInput"
      />
    </div>
  );
}
