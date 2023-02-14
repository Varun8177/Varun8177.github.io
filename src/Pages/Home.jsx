import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { TfiDownload, TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Home() {
  let name = "my name is Varun Ergurala";
  const { colorMode } = useColorMode();
  let [content, setContent] = useState("");

  function Name() {
    let i = 0;
    let interval = setInterval(() => {
      if (i === name.length) {
        clearInterval(interval);
      } else {
        setContent((content += name[i]));
      }

      i = i + 1;
    }, 300);
  }
  useEffect(() => {
    Name();
    return () => {
      setContent("");
    };
  }, []);
  return (
    <Center pl={20} pr={20} h={"100vh"} id="home">
      <Flex justifyContent={"space-evenly"} w="100%">
        <Box>
          <Heading id="user-detail-name" mb={"20px"} fontSize={"72px"}>
            Hello, {content}
          </Heading>
          <Heading mb={"20px"}>I'm a Full Stack Web Developer</Heading>
          <Text id="user-detail-intro" w={"55%"}>
            Aspiring Full Stack Web Developer who loves solving problems and
            building projects. I am equipped with a variety of technologies and
            tools to help me build the best possible product.
          </Text>

          <Flex
            w={"300px"}
            justifyContent={"space-around"}
            mt={"10px"}
            mb={"20px"}
          >
            <Tooltip hasArrow label="Github" bg="gray.300" color="black">
              <NavLink to={"https://github.com/Varun8177"} target={"_blank"}>
                <Box id="contact-github">
                  <RxGithubLogo size="50px" border-radius="50%" />
                </Box>
              </NavLink>
            </Tooltip>
            <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
              <NavLink
                to={"https://www.linkedin.com/in/varun8177"}
                target={"_blank"}
              >
                <Box id="contact-linkedin">
                  <BsLinkedin size="50px" />
                </Box>
              </NavLink>
            </Tooltip>
            <Tooltip hasArrow label="Phone" bg="gray.300" color="black">
              <Box id="contact-phone">
                <FiPhoneCall size="50px" />
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Email" bg="gray.300" color="black">
              <Box
                id="contact-email"
                onClick={() => {
                  window.location.href = "mailto:varunergurala9999@gmail.com";
                }}
              >
                <TfiEmail size="50px" />
              </Box>
            </Tooltip>
          </Flex>
          <a
            href="../../images/Varun_Ergurala_Resume.pdf"
            // id="resume-link-1"
            id="resume-button-2"
            download
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/17cTzx5JO8LVlbzWnptj6L2Xp4sPyyx8_/view?usp=share_link"
              );
            }}
          >
            <Button
              // id="resume-button-1"
              _hover={{
                color: colorMode === "light" ? "black" : "white",
                cursor: "pointer",
              }}
              bgGradient={
                colorMode === "light"
                  ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
                  : "none"
              }
              color={colorMode === "light" ? "white" : "black"}
              bgColor={colorMode === "dark" ? "red" : "none"}
              borderRadius={"10px"}
              fontSize={["xs", "sm", "lg", "xl"]}
            >
              Resume
              <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
                {<TfiDownload />}
              </Box>
            </Button>
          </a>
        </Box>
      </Flex>
      {/* <Box
        h={"200px"}
        w={"100px"}
        position={"absolute"}
        bgColor={"#def6ff"}
        alignSelf={"baseline"}
        top={"500"}
        left={"80%"}
      ></Box> */}
    </Center>
  );
}

export default Home;
