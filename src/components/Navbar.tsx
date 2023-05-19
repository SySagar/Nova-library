import Stack from "./common/Stack";
import {
  chat,
  saved,
  notification,
  logo,
  Hamburger,
} from "../assets/icons/index";
import ActiveContext from "../context/activeContext";
import { useContext } from "react";

export default function Navbar() {
  const hamburgerSwitch = useContext(ActiveContext);
  console.log(hamburgerSwitch.active);

  return (
    <Stack
      id="navbar"
      className="navbar-body"
      direction="row"
      width="100%"
      position="relative"
    >
      <Stack margin="0" alignItems="center">
        <div
          className="hamburger"
          id="hamburger"
          style={{ margin: "0", paddingInline: "25px" }}
          onMouseOver={hamburgerSwitch.setActive}
        >
          <img
            style={{ width: "27px", margin: "0" }}
            src={Hamburger}
            alt="hamburger"
          />
        </div>

        <img style={{ margin: "0" }} src={logo} alt="logo" />
      </Stack>
      <div
        className="grower"
        style={{
          display: "flex",
          flexGrow: "1",
          margin: "0",
        }}
      ></div>

      <div
        className="icon-outer"
        style={{ paddingInlineEnd: "25px", margin: "0" }}
      >
        <Stack
          className="icons"
          id="icons"
          gap="32"
          alignItems="center"
          height="100%"
        >
          <img width={"25px"} src={chat} alt="chat" />
          <img width={"20px"} src={saved} alt="saved" />
          <img width={"20px"} src={notification} alt="notification" />
          <img
            className="profile-pic"
            width={"30px"}
            height={"30px"}
            style={{ borderRadius: "50%" }}
            src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media"
            alt=""
          />
        </Stack>
      </div>
    </Stack>
  );
}
