import Stack from "./common/Stack";
import { Hamburger } from "../assets/icons/index";
import Divider from "./common/Divider";
import { connect } from "../assets/sidebar-icons/index";
import { events } from "../assets/sidebar-icons/index";
import { home } from "../assets/sidebar-icons/index";
import { invite } from "../assets/sidebar-icons/index";
import { job } from "../assets/sidebar-icons/index";
import { plus } from "../assets/sidebar-icons/index";
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
          width: "60px",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <Stack
          direction="column"
          position="relative"
          width="100%"
          height="100%"
        >
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
            width: "250px",
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <Stack
            direction="column"
            alignItems="flex-start"
            position="relative"
            width="100%"
            height="100%"
          >
            <div
              className="hamburger-icon"
              style={{
                position: "relative",
                paddingBlock: "15px",
                right: "70px",
              }}
            >
              <img src={Hamburger} alt="" />
            </div>

            <div
              style={{
                position: "relative",
                display: "flex",
                paddingBlock: "15px",
                alignItems: "self-start",
                justifyContent: "self-start",
                width: "100%",
                right: "55px",
              }}
            >
              <Stack direction="column" alignItems="flex-start" width="100%">
                <Stack
                  direction="row"
                  padding="15"
                  alignItems="center"
                  className="hoverlinks"
                  width="fit-content"
                >
                  <img style={{ paddingInlineEnd: "14px" }} src={home} alt="" />
                  <Typography>Home</Typography>
                </Stack>
                <Stack
                  direction="row"
                  position="relative"
                  left="25"
                  padding="20"
                  justifyContent="flex-start"
                  gap="15px"
                  className="hoverlinks"
                  width="fit-content"
                >
                  <img
                    style={{ paddingInlineEnd: "14px" }}
                    src={connect}
                    alt=""
                  />
                  <Typography>Get Reffered</Typography>
                </Stack>

                <Stack
                  direction="row"
                  position="relative"
                  left="20"
                  padding="20"
                  justifyContent="flex-start"
                  gap="15px"
                  className="hoverlinks"
                  width="fit-content"
                >
                  <img style={{ paddingInlineEnd: "14px" }} src={job} alt="" />
                  <Typography>Job Boards</Typography>
                </Stack>

                <Stack
                  direction="row"
                  position="relative"
                  left="5"
                  padding="20"
                  justifyContent="flex-start"
                  gap="15px"
                  className="hoverlinks"
                  width="fit-content"
                >
                  <img
                    style={{ paddingInlineEnd: "14px" }}
                    src={events}
                    alt=""
                  />
                  <Typography>Events</Typography>
                </Stack>

                <Stack
                  direction="row"
                  position="relative"
                  left="30"
                  padding="20"
                  justifyContent="flex-start"
                  gap="15px"
                  className="hoverlinks"
                  width="fit-content"
                >
                  <img
                    style={{ paddingInlineEnd: "14px" }}
                    src={invite}
                    alt=""
                  />
                  <Typography>Invite Friends</Typography>
                </Stack>
              </Stack>
            </div>

            <div className="divider">
              <Divider></Divider>
            </div>

            <div style={{ paddingBlock: "30px", width: "100%" }}>
              <Stack
                width="10%"
                border="1"
                className="seconday-list"
                direction="column"
                gap="35"
              >
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
      )}
    </div>
  );
}
