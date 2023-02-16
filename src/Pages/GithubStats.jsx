import { Box, Center, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Link } from "react-router-dom";
import Tooltip from "react-tooltip";

const GithubStats = () => {
  return (
    <Box>
      <Center>
        <Heading>GithubStats</Heading>
      </Center>
      <Stack>
        {/* Calender */}
        <GitHubCalendar
          class="react-activity-calendar"
          style={{ margin: "auto", width: "80%" }}
          username="Varun8177"
          blockSize={20}
          hideTotalCount
        >
          <Tooltip delayShow={20} html />
        </GitHubCalendar>
        {/* Stats */}
        <Flex
          w={"100%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "row",
            "2xl": "row",
          }}
        >
          <Link
            m={"auto"}
            to={
              "https://github-readme-streak-stats.herokuapp.com/?user=Varun8177"
            }
          >
            <Image
              m={"auto"}
              w={{
                base: "50%",
                sm: "50%",
                md: "50%",
                lg: "70%",
                xl: "80%",
                "2xl": "100%",
              }}
              mb={{
                base: "20px",
                sm: "20px",
                md: "20px",
                lg: "20px",
              }}
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=Varun8177"
            />
          </Link>
          {/* Top language */}
          <Link
            to={
              "https://github-readme-stats.vercel.app/api/top-langs/?username=Varun8177&layout=compact"
            }
          >
            <Image
              w={{
                base: "50%",
                sm: "50%",
                md: "50%",
                lg: "70%",
                xl: "80%",
                "2xl": "100%",
              }}
              m={"auto"}
              mb={{
                base: "20px",
                sm: "20px",
                md: "20px",
                lg: "20px",
              }}
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Varun8177&layout=compact"
            />
          </Link>

          {/* Stats */}
          <Link
            m={"auto"}
            to={"https://github-readme-stats.vercel.app/api?username=Varun8177"}
          >
            <Image
              w={{
                base: "50%",
                sm: "50%",
                md: "50%",
                lg: "70%",
                xl: "80%",
                "2xl": "100%",
              }}
              m={"auto"}
              mb={{
                base: "20px",
                sm: "20px",
                md: "20px",
                lg: "20px",
              }}
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=Varun8177&count_private=true&show_icons=true"
            />
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
};

export default GithubStats;
