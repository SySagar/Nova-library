import React from "react";
import Tiptap from "./Tiptap";
import Typography from "./common/Typography";
import Stack from "./common/Stack";
import Dropdown from "./common/Dropdown";
import Textfield from "./common/Textfield";

export default function Modal({ handleCallBack }: any) {
  return (
    <div className="modal">
      <Stack
        className="modal-container"
        width="50%"
        height="70%"
        direction="column"
        position="relative"
        justifyContent="center"
        alignItems="flex-start"
      >
        <div
          className="cross"
          onClick={() => {
            handleCallBack(false);
          }}
          style={{ position: "absolute", right: 0, top: 0, padding: "15px" }}
        >
          X
        </div>
        <Stack
          className="modal-content"
          position="relative"
          width="85%"
          height="85%"
          direction="column"
          border="1"
          gap="20"
        >
          <Typography fontSize="30" fontWeight="bold">
            Write a new post
          </Typography>
          
          <Stack direction="row" gap="10">
            <Dropdown></Dropdown>
            <Dropdown></Dropdown>
          </Stack>

          <div style={{ width: "100%" }}>
            <Textfield
              borderRadius="6"
              height="35px"
              width="100%"
              border="1"
            ></Textfield>
          </div>

          <Tiptap />
        </Stack>
      </Stack>
    </div>
  );
}
