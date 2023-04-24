import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import profile from "../images/new_profile.jpg";
import * as Scroll from "react-scroll";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="about" className="about section" py={{ base: "10vh", md: "20vh" }}>
      <Center mb={8}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }}>About Me</Heading>
      </Center>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 8, md: 16 }}
        justify="center"
        align="center"
        mb={{ base: 16, md: 32 }}
      >
        <Image
          src={profile}
          alt="profile"
          h={{ base: "200px", md: "300px" }}
          w={{ base: "200px", md: "300px" }}
          objectFit="cover"
          borderRadius="full"
          boxShadow="2xl"
          className="home-img"
        />
        <Box
          w={{ base: "80%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}>
            Hello, my name is Varun Ergurala
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            mb={8}
            id={"user-detail-intro"}
          >
            An enthusiastic Full-stack Developer, skilled in React.js.
            Developing websites using JavaScript, Node.js, Express.js, MongoDB.
            An optimistic man, always ready to take a critical decision, ready
            to work under pressure. Always ready to try some new things for
            optimization.
          </Text>
          <Scroll.Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Button
              w={{ base: "100%", md: "auto" }}
              size="lg"
              p="8"
              borderRadius="10px"
              fontSize={{ base: "sm", md: "lg" }}
              bgGradient={
                colorMode === "light"
                  ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
                  : "none"
              }
              bgColor={colorMode === "dark" ? "red" : "none"}
              _hover={{
                color: colorMode === "light" ? "white" : "black",
                cursor: "pointer",
              }}
            >
              Contact Me
            </Button>
          </Scroll.Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
