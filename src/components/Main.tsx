import Stack from "./common/Stack";
import Tab from "./common/Tab";
import PostCard from "./PostCard";
import Typography from "./common/Typography";
import Card from "./common/Card";
import moment from "moment";
import { useContext } from "react";
import activeContext from "../context/activeContext";

export default function Main() {
  const { active,setDeactive } = useContext(activeContext);

  return (
    <div className="main" style={{ width: "100%", paddingLeft: "64px" }}>
      <div
       onClick={setDeactive}
        style={{
          display: "flex",
          position: "fixed",
          left: "0",
          top: "0",
          bottom: "0",
          right: "0",
          opacity: active ? "0.5" : "0",
          backgroundColor: "black",
          zIndex: active ? "2" : "-1",
          transitionDuration: "0.20s",
          transitionDelay: "0.20s",
        }}
      ></div>
      <Stack
        direction="row"
        position="relative"
        className="main-body"
        gap="32"
      >
        <Stack
          className="post-cards"
          margin="0"
          minWidth="0"
          position="relative"
          flexGrow="1"
          direction="column"
          gap="20"
        >
          <PostCard></PostCard>
          <Tab></Tab>
          {/* <Cards></Cards> */}
        </Stack>

        <Stack
          className="right-cards"
          id="right-cards"
          direction="column"
          margin="0"
          display="flex"
        >
          <Stack direction="column" gap="15" position="relative" display="flex">
            <div style={{ padding: "5px",display:'flex' }}>
              <Typography
                position="absolute"
                color="#4A52E3"
                fontWeight="bold"
                left="0"
                fontSize="12"
              >
                TRENDING POSTS
              </Typography>
            </div>

            <Card
              className="left-top-cards"
              id="left-top-cards"
              direction="column"
              gap="15"
              width="280px"
              backgroundcolor="white"
              borderRadius="12"
            >
              <Typography margin="0" fontSize="12" fontWeight="bold">
                🚀 Startup hub
              </Typography>
              <Typography lineHeight="20px" margin="0" fontSize="13">
                Learn Out Design Agency Create Your Perfect Website
              </Typography>
              <Typography margin="0" fontSize="12">
                {moment().startOf("hour").fromNow()} •{" "}
                {Math.floor(Math.random() * 100) + 1} views
              </Typography>
            </Card>

            <Card
              className="left-top-cards"
              id="left-top-cards"
              direction="column"
              gap="15"
              width="280px"
              backgroundcolor="white"
              borderRadius="12"
            >
              <Typography margin="0" fontSize="12" fontWeight="bold">
                👨‍💻 Women in tech
              </Typography>
              <Typography
                lineHeight="20px"
                margin="0"
                fontSize="13"
                width="200px"
              >
                Learn SQL: Hands-On SQL Workshop
              </Typography>
              <Typography margin="0" fontSize="12">
                {moment().startOf("hour").fromNow()} •{" "}
                {Math.floor(Math.random() * 100) + 1} views
              </Typography>
            </Card>

            <Card
              className="left-top-cards"
              id="left-top-cards"
              direction="column"
              gap="15"
              width="280px"
              backgroundcolor="white"
              borderRadius="12"
            >
              <Typography margin="0" fontSize="12" fontWeight="bold">
                🎓 Grad School
              </Typography>
              <Typography
                lineHeight="20px"
                margin="0"
                fontSize="13"
                width="200px"
              >
                FREE EVENT: How to get into a top MBA program
              </Typography>
              <Typography margin="0" fontSize="12">
                {moment().startOf("hour").fromNow()} •{" "}
                {Math.floor(Math.random() * 100) + 1} views
              </Typography>
            </Card>

            <Card
              className="left-top-cards"
              id="left-top-cards"
              direction="column"
              gap="15"
              width="280px"
              backgroundcolor="white"
              borderRadius="12"
            >
              <Typography margin="0" fontSize="12" fontWeight="bold">
                🦋 Creator Space
              </Typography>
              <Typography lineHeight="20px" fontSize="13" width="200px">
                Hiring tiktok creators for a YC-Bakced Fintech Startup(Paid)
              </Typography>
              <Typography margin="0" fontSize="12">
                {moment().startOf("hour").fromNow()} •{" "}
                {Math.floor(Math.random() * 100) + 1} views
              </Typography>
            </Card>
          </Stack>

          <br />

          <Stack direction="column" gap="0" width="280px" position="relative" justifyContent="flex-start">
            <div style={{ margin:'0',padding: "15px",justifyContent:'center' }}>
              <Typography
                color="#4A52E3"
                fontWeight="bold"
                fontSize="12"
              >
                JOBS BOARDS
              </Typography>
            </div>

            <Card
              className="left-down-cards"
              backgroundcolor="white"
              gap="14"
              borderRadius="12"
              alignItems="center"
            >
              <img
                width={40}
                style={{borderRadius: "12px"}}
                src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/jobBoardPictures%2Fsimplify_square.png?alt=media&token=778b66b2-df75-4101-88e4-77fc49c0f182"
                alt=""
              />
              <Typography
                color="black"
                fontSize="14"
                fontWeight="bold"
                lineHeight="20px"
              >
                Internship & New Grad Lists by Simplify
              </Typography>
            </Card>

            <Card
              className="left-down-cards"
              backgroundcolor="white"
              gap="14"
              width="280px"
              borderRadius="12"
              alignItems="center"
            >
              <img
                width={40}
                style={{borderRadius: "12px"}}
                src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/jobBoardPictures%2Fstartup%20search.jpeg?alt=media&token=be5908f7-47dc-4cff-b9db-e0b931001836"
                alt=""
              />
              <Typography
                color="black"
                fontSize="14"
                fontWeight="bold"
                lineHeight="20px"
              >
                Startup Search by Contrary Capital
              </Typography>
            </Card>

            <Card
              className="left-down-cards"
              backgroundcolor="white"
              gap="14"
              borderRadius="12"
              alignItems="center"
              padding="20"
            >
              <img
                width={40}
                style={{borderRadius: "12px"}}
                src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/jobBoardPictures%2FCryptocurrencyjobs.png?alt=media&token=fc35aead-0460-43b0-b089-c891556ba229"
                alt=""
              />
              <Typography
                color="black"
                fontSize="14"
                fontWeight="bold"
                margin="0"
                lineHeight="20px"
              >
                Cryptocurrency Jobs
              </Typography>
            </Card>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
