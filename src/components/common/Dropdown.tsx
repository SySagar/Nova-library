import Avatar from "./Avatar";
import { FaCaretDown } from "react-icons/fa";
import Typography from "./Typography";
import { useState } from "react";
import Stack from "./Stack";

const content = ["Innovative Changemaker", "Enthused Cricket"];

export default function Dropdown() {
  const [index, setIndex] = useState(content[0]);
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
            border: "1px #E0E0E0 solid",
          }}
        >
          <Stack
            direction="row"
            width="fit-content"
            alignItems="center"
            gap="5"
          >
            <Avatar
              width="20"
              height="20"
              src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media"
            />
            <Typography fontSize="15" fontWeight="bold">
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
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "10px",
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
