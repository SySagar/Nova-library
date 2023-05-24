import { FaCaretDown } from "react-icons/fa";
import Typography from "./Typography";
import { useState } from "react";
import Stack from "./Stack";

const content = [
  "🚀 Startup Hub",
  "🌳 Community Builders",
  "💱 Crypto and Blockchain",
  "🤝 HR and Recruiting",
  "🦋 Creator Space",
  "📈 Marketing and Sales",
  "🎨 Design",
  "💵 Venture Capital",
  "🦄 Entrepreneurship",
  "💻 Software Engineering",
  "📝 General Advice",
];

export default function Dropdown2() {
  const [index, setIndex] = useState("Select a Community");
  const [active, setActive] = useState(false);
  return (
    <Stack className="dropdown" direction="row" margin="0">
      <div
        onClick={() => {
          setActive(!active);
        }}
        className="dropdown-body"
        style={{
          display: "flex",
          flexDirection: "column",
          borderColor: "grey",
          margin: "0",
        }}
      >
        <button
          style={{
            padding: "5px",
            backgroundColor: "white",
            borderRadius: "20px",
            borderColor: "grey",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="5"
            padding="2"
            paddingx="22"
          >
            <Typography fontSize="15" fontWeight="bold" color="grey">
              {index}
            </Typography>
            <div>
              <FaCaretDown />
            </div>
          </Stack>
        </button>

        {active && (
          <div
          className="dropdown-content"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "10px",
              height: "220px",
              overflow: "scroll",
              overflowY: "scroll",
              overflowX: "hidden",
              borderColor: "grey",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
              padding: "5px",
              marginTop: "35px",
              marginLeft: "20px",
              position: "absolute",
              zIndex: 20,
            }}
          >
            <li
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              {content.map((item) => (
                <button
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    margin: "0",
                    border: "1px #fff solid",
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
