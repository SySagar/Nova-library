import React from "react";
import { FaCaretDown } from "react-icons/fa";
import Typography from "./Typography";
import { useState } from "react";
import Stack from "./Stack";

const content = ["Innovative Changemaker", "Enthused Cricket"];

export default function Dropdown() {
  const [index, setIndex] = useState(content[0]);
  const [active, setActive] = useState(false);
  return (
    <Stack
      className="dropdown"
      direction="row"
        justifyContent="center"
      alignItems="center"
      width="50%"
      height="fit-content"
    >
      <div
        onClick={() => {
          setActive(!active);
        }}
        className="dropdown-body"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
            alignItems: "center",
          position: "relative",
        }}
      >
        <button
          style={{
            padding: "10px",
            width: "fit-content",
            backgroundColor: "white",
            borderRadius: "20px",
            borderColor: "grey",
          }}
        >
          <Stack direction="row" width="fit-content" gap="10">
            <Typography fontSize="16" fontWeight="regular">
              {index}
            </Typography>
            <div>
              <FaCaretDown />
            </div>
          </Stack>
        </button>

        {active && (
          <div
            style={{
              display: "flex",
              width: "fit-content",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "10px",
              borderColor: "grey",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
              padding: "5px",
              marginTop: "6px",
              position: "absolute",
              top: "100%",
              zIndex: 20,
            }}
          >
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              {content.map((item) => (
                <button
                  style={{
                    padding: "10px",
                    width: "100%",
                    backgroundColor: "white",
                    border: "none",
                  }}
                  onClick={() => setIndex(item)}
                >
                  {item}
                </button>
              ))}
            </li>
          </div>
        )}
      </div>
    </Stack>
  );
}
