import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";

function Home() {
  let name = "my name is Varun Ergurala";
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
  }, []);
  return (
    <Center pl={20} pr={20} h={"100vh"}>
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
            <Box id="contact-github">
              <RxGithubLogo size="50px" border-radius="50%" />
            </Box>
            <Box id="contact-linkedin">
              <BsLinkedin size="50px" />
            </Box>
            <Box id="contact-phone">
              <FiPhoneCall size="50px" />
            </Box>
            <Box id="contact-email">
              <TfiEmail size="50px" />
            </Box>
          </Flex>
          <Button
            w={"200px"}
            p={"8"}
            _hover={{ color: "red", cursor: "pointer" }}
            bgGradient="linear(to-l,#3CAED7 100%, #40BAB6 100%)"
            borderRadius={"10px"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Contact me
          </Button>
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
