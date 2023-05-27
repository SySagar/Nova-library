import Stack from "./common/Stack";
import {
  chat,
  saved,
  notification,
  logo,
  Hamburger,
  Search
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
      justifyContent="center"
      minHeight="56px"
    >
      <Stack className="nav-body-container" margin="0"  flexGrow="1" width="100%" justifyContent="center" alignItems="center">

      <Stack margin="0" alignItems="center">
        <div
          className="hamburger"
          id="hamburger"
          style={{ margin: "0", paddingInline: "24px" }}
          onMouseOver={hamburgerSwitch.setActive}
        >
          <img
            style={{ width: "24px",height:'24px', margin: "0" }}
            src={Hamburger}
            alt="hamburger"
            />
        </div>

        <img className="logo" style={{ margin: "0" }} src={logo} alt="logo" />
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
        style={{ paddingInlineEnd: "40px", margin: "0" }}
        >
        <Stack
          className="icons"
          id="icons"
          gap="24"
          alignItems="center"
          height="100%"
          >
           <div className="nav-links" id="search">
          <img width={"24px"}  src={Search} alt="search" />
          </div>
          <div className="nav-links" id="chat">
          <img width={"24px"} src={chat} alt="chat" />
          </div>
          <div className="nav-links"  id="saved">
          <img width={"24px"} src={saved} alt="saved" />
          </div>
          <div className="nav-links"  id="notification"> 
          <img width={"24px"} src={notification} alt="notification" />
          </div>
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
    </Stack>
  );
}
