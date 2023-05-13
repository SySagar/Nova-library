import Card from "./common/Card";
import Stack from "./common/Stack";
import Textfield from "./common/Textfield";
import { useState } from "react";
import Modal from "./Modal.js";

export default function PostCard() {
  const [editor, setEditor] = useState(false);

  function callBack(textFieldData: boolean) {
    setEditor(textFieldData);
    console.log(textFieldData);
  }

  return (
    <div className="post-card" style={{ position: "relative", width: "100%" }}>
      <Stack
        height="60px"
        padding="10"
        alignItems="center"
        position="relative"
        borderRadius="15"
        backgroundcolor="white"
      >
        <img
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "100%",
          }}
          width={"30px"}
          height={"30px"}
          src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media"
          alt=""
        />
        <Textfield
          className="post-box"
          handleCallBack={callBack}
          borderRadius="7"
          width="100%"
          backgroundcolor="#F4F4F4"
          placeholder="   Write a post"
          height="40px"
        ></Textfield>
      </Stack>

      {editor && <Modal handleCallBack={callBack}/>}
    </div>
  );
}
