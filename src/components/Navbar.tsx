import Stack from "./common/Stack";
import {
  chat,
  saved,
  notification,
  logo,
  Hamburger,
} from "../assets/icons/index";

export default function Navbar() {
  return (
    <div className="Navbar" style={{ position: "relative", width: "100%" }}>
      <Stack
        className="navbar-body"
        direction="row"
        width="100%"
        height="50px"
        position="relative"
      >
        <Stack justifyContent="center" alignItems="center" width="270px"  >
          <img style={{ width: "27px" }} src={Hamburger} alt="hamburger" />
          <img src={logo} alt="logo" />
        </Stack>
        <div
          style={{
            display: "flex",
            flexGrow: "1",
          }}
        ></div>

          <div style={{paddingInlineEnd:'25px'}}>

        <Stack className="icons" width="200px" alignItems="center">
          <img width={"25px"} src={chat} alt="chat" />
          <img width={"20px"} src={saved} alt="saved" />
          <img width={"20px"} src={notification} alt="notification" />
          <img width={'30px'} height={'30px'} style={{borderRadius:'50%'}} src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media" alt="" />
        </Stack>
          </div>
      </Stack>
    </div>
  );
}
