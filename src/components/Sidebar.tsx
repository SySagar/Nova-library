import Stack from "./common/Stack";
import { Hamburger } from "../assets/icons/index";
import Divider from "./common/Divider";
import { connect } from "../assets/sidebar-icons/index";
import { events } from "../assets/sidebar-icons/index";
import { home } from "../assets/sidebar-icons/index";
import { invite } from "../assets/sidebar-icons/index";
import { job } from "../assets/sidebar-icons/index";
import { plus } from "../assets/sidebar-icons/index";
import { Phamburger } from "../assets/icons/index";
import Typography from "./common/Typography";
import activeContext from "../context/activeContext";
import { useContext } from "react";

export default function Sidebar() {
  const { active, setDeactive, setActive } = useContext(activeContext);

  return (
    <div>
      <div
        className="sidebar"
        onMouseOver={setActive}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: "64px",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <Stack direction="column" position="relative" height="100%">
          <div className="hamburger-icon" style={{ paddingBlock: "15px" }}>
            <img src={Hamburger} alt="" />
          </div>

          <div style={{ paddingBlock: "30px" }}>
            <Stack direction="column" gap="35">
              <img src={home} alt="" />
              <img src={connect} alt="" />
              <img src={job} alt="" />
              <img src={events} alt="" />
              <img src={invite} alt="" />
            </Stack>
          </div>

          <div className="divider">
            <Divider></Divider>
          </div>

          <div style={{ paddingBlock: "30px" }}>
            <Stack className="seconday-list" direction="column" gap="35">
              <img src={plus} alt="" />
              <div>🚀</div>
              <div>🌳</div>
              <div>💱</div>
              <div>🤝</div>
              <div>🦋</div>
              <div>📈</div>
              <div>🎨</div>
              <div>💵</div>
              <div>🦄</div>
              <div>💻</div>
              <div>📝</div>
            </Stack>
          </div>
        </Stack>
      </div>

      {/* for active state */}
      {active && (
        <div
          className="sidebar-active"
          onMouseLeave={setDeactive}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            width: "245px",
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <Stack direction="column" position="relative" height="100%">
            <div
              className="hamburger-icon"
              style={{
                position: "relative",
                paddingBlock: "15px",
                margin: "0",
                left: "30px",
                width: "fit-content",
              }}
            >
              <img src={Phamburger} alt="" />
            </div>

            <Stack className="username" direction="column" gap="20" margintop="25"  width="100%">

              <Stack gap="10">
              <img
            className="profile-pic"
            width={"30px"}
            height={"30px"}
            style={{ borderRadius: "50%" }}
            src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media"
            alt=""
            />

            <Typography fontWeight="bold">
              Innovative Changemaker
            </Typography>
              </Stack>


            <Divider></Divider>
          </Stack>
          


            <div
              style={{
                position: "relative",
                display: "flex",
                paddingBlock: "10px",
                width: "100%",
              }}
            >
              <Stack direction="column" margin="0" width="100%">
                <Stack
                  width="100%"
                  direction="row"
                  paddingy="6"
                  alignItems="center"
                  margin="0"
                >
                  <Stack
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    paddingy="12"
                    paddingx="18"
                    width="100%"
                  >
                    <img
                      style={{
                        paddingInlineEnd: "14px",
                        margin: "0",
                      }}
                      src={home}
                      alt=""
                    />
                    <Typography margin="0" textAlign="left">
                      Home
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" paddingy="6" margin="0">
                  <Stack
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="10"
                    paddingx="18"
                    width="100%"
                  >
                    <img
                      style={{ paddingInlineEnd: "14px", margin: "0" }}
                      src={connect}
                      alt=""
                    />
                    <Typography margin="0" textAlign="left">
                      Get Reffered
                    </Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" paddingy="12" margin="0">
                  <Stack
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="10"
                    paddingx="18"
                    width="100%"
                  >
                    <img
                      style={{ paddingInlineEnd: "14px", margin: "0" }}
                      src={job}
                      alt=""
                    />
                    <Typography margin="0">Job Boards</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" paddingy="6" margin="0">
                  <Stack
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="12"
                    paddingx="18"
                    width="100%"
                  >
                    <img
                      style={{ paddingInlineEnd: "14px", margin: "0" }}
                      src={events}
                      alt=""
                    />
                    <Typography textAlign="left" margin="0">
                      Events
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction="row"
                  padding="16"
                  alignItems="center"
                  className="phoverlinks"
                  margin="0"
                >
                  <img
                    style={{ paddingInlineEnd: "14px", margin: "0" }}
                    src={invite}
                    alt=""
                  />
                  <Typography margin="0">Invite Friends</Typography>
                </Stack>
              </Stack>
            </div>

            <div className="divider">
              <Divider></Divider>
            </div>

            <div style={{ width: "100%" }}>
              <Stack className="seconday-list" direction="column">
                <Stack
                  gap="5"
                  margin="0"
                  width="100%"
                  direction="row"
                  paddingtop="30"
                  alignItems="center"
                >
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="6"
                    paddingx="18"
                    width="100%"
                  >
                    <img src={plus} style={{ margin: "0" }} alt="" />
                    <Typography margin="0">Add Communities</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" margin="0" paddingtop="26">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    🚀
                    <Typography margin="0">Startup Hub</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" margin="0" paddingtop="18">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    🌳
                    <Typography margin="0">Community Builders</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" margin="0" paddingtop="18">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    💱
                    <Typography margin="0">Crypto and Blockchain</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" margin="0" paddingtop="6">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    🤝
                    <Typography margin="0">HR and Recruiting</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" margin="0" paddingtop="18">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    🦋
                    <Typography margin="0">Creator Space</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" margin="0" paddingtop="18">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    📈
                    <Typography margin="0">Marketing and Sales</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" margin="0" paddingtop="18">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    🎨
                    <Typography margin="0">Design</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" margin="0" paddingtop="18">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    💵
                    <Typography margin="0">Venture Capital</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" margin="0" paddingtop="18">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    🦄
                    <Typography margin="0">Entrepreneurship</Typography>
                  </Stack>
                </Stack>

                <Stack direction="row" margin="0" paddingtop="18">
                  <Stack
                    gap="12"
                    className="hoverlinks"
                    direction="row"
                    margin="0"
                    alignItems="center"
                    padding="8"
                    paddingx="18"
                    width="100%"
                  >
                    💻
                    <Typography margin="0">Software Engineering</Typography>
                  </Stack>
                </Stack>

                <Stack
                  className="hoverlinks"
                  direction="row"
                  margin="0"
                  alignItems="center"
                  padding="18"
                  gap="12"
                >
                  📝
                  <Typography margin="0">General Advice</Typography>
                </Stack>

                <Stack
                  className="hoverlinks"
                  direction="row"
                  margin="0"
                  padding="20"
                  gap="12"
                >
                  <Typography margin="0">Ladder Community</Typography>
                </Stack>
              </Stack>
            </div>
          </Stack>
        </div>
      )}
    </div>
  );
}
