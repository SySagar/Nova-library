import Tiptap from "./Tiptap";
import Typography from "./common/Typography";
import Stack from "./common/Stack";
import Dropdown from "./common/Dropdown";
import Textfield from "./common/Textfield";
import Button from "./common/Button";
import { FaWindowClose } from "react-icons/fa";

export default function Modal({ handleCallBack }: any) {
  return (
    <div className="modal" id="modal">
      <Stack
      id="modal-container"
        className="modal-container"
        width="50%"
        height="70%"
        direction="column"
        position="relative"
        justifyContent="center"
      >
        <div
          className="cross"
          onClick={() => {
            handleCallBack(false);
          }}
          style={{ position: "absolute", right: 0, top: 0, padding: "15px" }}
        >
          <FaWindowClose />
        </div>
        <Stack
          className="modal-content"
          position="relative"
          width="90%"
          height="90%"
          direction="column"
          gap="16"
        >
          <Typography
            position="relative"
            left="10"
            margin="0"
            fontSize="30"
            fontWeight="bold"
          >
            Write a new post
          </Typography>

          <Stack
          id="modal-dropdowns"
            direction="row"
            margin="0"
            height="fit-content"
            alignItems="center"
            gap="5"
          >
            <Dropdown></Dropdown>
            <Typography margin="0" fontWeight="bold">
              in
            </Typography>
            <Dropdown></Dropdown>
          </Stack>

          <div style={{ width: "100%" }}>
            <Textfield
              borderRadius="6"
              height="35px"
              width="100%"
              border="1"
              placeholder="    Add a title"
            ></Textfield>
          </div>

          <Stack
            direction="row"
            width="100%"
            height="250px"
            border="1"
            borderRadius="7"
          >
            <Tiptap />
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-end"
            width="100%"
            position="relative"
            alignItems="center"
          >
            <Stack flexGrow="1"></Stack>
            <Stack direction="row" height="fit-content" gap="10">
              <Button
                width="100px"
                height="40px"
                border="1"
                bordercolor="#3F52E1"
                backgroundColor="white"
                color="#3F52E1"
                borderRadius="10"
              >
                Cancel
              </Button>
              <Button
                width="80px"
                height="40px"
                backgroundColor="#3F52E1"
                borderRadius="11"
                color="white"
                fontSize="17px"
              >
                Post
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
