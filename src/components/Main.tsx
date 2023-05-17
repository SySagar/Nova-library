import Stack from "./common/Stack";
import Tab from "./common/Tab";
import PostCard from "./PostCard";
import Cards from "./Cards";
import Tiptap from "./Tiptap";
import Typography from "./common/Typography";
import Card from "./common/Card";
import moment from "moment";

export default function Main() {
  return (
    <div className="main" style={{ width: "100%", marginTop: "30px" }}>
      <Stack
        direction="row"
        position="relative"
        className="main-body"
        width="70%"
      >
        <Stack width="70%" position="relative" direction="column">
          <PostCard></PostCard>
          <Tab></Tab>
          <Cards></Cards>
        </Stack>

        <Stack
          width="30%"
          direction="column"
          gap="15"
          position="relative"
        >
          <Stack direction="column" gap="25" position="relative">
            <div style={{ padding: "10px" }}>
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
              direction="column"
              justifyContent="flex-start"
              gap="15"
              backgroundcolor="white"
              padding="20"
              borderRadius="7"
            >
              <Typography fontSize="12" fontWeight="bold">
                🚀 Startup hub
              </Typography>
              <Typography fontSize="13" width="200px">
                Learn Out Design Agency Create Your Perfect Website
              </Typography>
              <Typography fontSize="12">
                {moment().startOf("hour").fromNow()} •{" "}
                {Math.floor(Math.random() * 100) + 1} views
              </Typography>
            </Card>

            <Card
              direction="column"
              justifyContent="flex-start"
              gap="15"
              backgroundcolor="white"
              padding="20"
              borderRadius="7"
            >
              <Typography fontSize="12" fontWeight="bold">
                👨‍💻 Women in tech
              </Typography>
              <Typography fontSize="13" width="200px">
                Learn SQL: Hands-On SQL Workshop
              </Typography>
              <Typography fontSize="12">
                {moment().startOf("hour").fromNow()} •{" "}
                {Math.floor(Math.random() * 100) + 1} views
              </Typography>
            </Card>

            <Card
              direction="column"
              justifyContent="flex-start"
              gap="15"
              backgroundcolor="white"
              padding="20"
              borderRadius="7"
            >
              <Typography fontSize="12" fontWeight="bold">
                🎓 Grad School
              </Typography>
              <Typography fontSize="13" width="200px">
                FREE EVENT: How to get into a top MBA program
              </Typography>
              <Typography fontSize="12">
                {moment().startOf("hour").fromNow()} •{" "}
                {Math.floor(Math.random() * 100) + 1} views
              </Typography>
            </Card>

            <Card
              direction="column"
              justifyContent="flex-start"
              gap="15"
              backgroundcolor="white"
              padding="20"
              borderRadius="7"
            >
              <Typography fontSize="12" fontWeight="bold">
                🦋 Creator Space
              </Typography>
              <Typography fontSize="13" width="200px">
                Hiring tiktok creators for a YC-Bakced Fintech Startup(Paid)
              </Typography>
              <Typography fontSize="12">
                {moment().startOf("hour").fromNow()} •{" "}
                {Math.floor(Math.random() * 100) + 1} views
              </Typography>
            </Card>
          </Stack>

          <br />

          <Stack direction="column" gap="15" position="relative">
            <div style={{ padding: "10px" }}>
              <Typography
                color="#4A52E3"
                fontWeight="bold"
                fontSize="12"
                position="absolute"
                left="0"
              >
                JOBS BOARDS
              </Typography>
            </div>

            <Card
              width="70%"
              backgroundcolor="white"
              gap="14"
              borderRadius="12"
              alignItems="center"
              padding="20"
            >
              <img
                width={40}
                src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/jobBoardPictures%2Fsimplify_square.png?alt=media&token=778b66b2-df75-4101-88e4-77fc49c0f182"
                alt=""
              />
              <Typography color="black" fontSize="14" fontWeight="bold">
                Internship & New Grad Lists by Simplify
              </Typography>
            </Card>

            <Card
              width="70%"
              backgroundcolor="white"
              gap="14"
              borderRadius="12"
              alignItems="center"
              padding="20"
            >
              <img
                width={40}
                src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/jobBoardPictures%2Fstartup%20search.jpeg?alt=media&token=be5908f7-47dc-4cff-b9db-e0b931001836"
                alt=""
              />
              <Typography color="black" fontSize="14" fontWeight="bold">
                Startup Search by Contrary Capital
              </Typography>
            </Card>

            <Card
              width="70%"
              backgroundcolor="white"
              gap="14"
              borderRadius="12"
              alignItems="center"
              padding="20"
            >
              <img
                width={40}
                src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/jobBoardPictures%2FCryptocurrencyjobs.png?alt=media&token=fc35aead-0460-43b0-b089-c891556ba229"
                alt=""
              />
              <Typography color="black" fontSize="14" fontWeight="bold">
                Cryptocurrency Jobs
              </Typography>
            </Card>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
