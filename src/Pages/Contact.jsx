import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import profile from "../images/new_profile.png";

const Contact = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      id="contact"
      h={"90vh"}
      mt={"30px"}
      background={
        colorMode === "light"
          ? "linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)"
          : "black"
      }
    >
      <Center>{/* <Heading>Contact</Heading> */}</Center>
      <Flex justifyContent={"space-evenly"}>
        <Stack>
          <Heading
            id="user-detail-name"
            mb={"20px"}
            fontSize={{
              sm: "50px",
              md: "52px",
              lg: "74px",
              xl: "74px",
              "2xl": "72px",
            }}
            alignSelf={"flex-start"}
          >
            Connect with me
          </Heading>
          <Box p={"3"}>
            <Flex
              // pl={"20%"}
              alignItems={"center"}
              onClick={() => {
                window.location.href = "mailto:varunergurala9999@gmail.com";
              }}
            >
              <TfiEmail size="40px" />
              <Text ml={30} id="contact-email">
                <b> varunergurala9999@gmail.com</b>
              </Text>
            </Flex>
          </Box>
          <Box p={"3"}>
            <Flex
              pl={"150px"}
              alignItems={"center"}
              onClick={() => {
                window.location.href = "mailto:varunergurala9999@gmail.com";
              }}
            >
              <FiPhoneCall size="40px" />
              <Text ml={30} id="contact-phone">
                <b>+91 8177836651</b>
              </Text>
            </Flex>
          </Box>
        </Stack>
        {/* <Image
          className="home-img"
          w={"300px"}
          h={"300px"}
          alignSelf={"center"}
          borderRadius={"15%"}
          // border={"1px solid teal"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          // src={profile}
          background={
            colorMode === "light"
              ? "#44B0D7"
              : "linear-gradient(to left, #40BAB6, #3CAED7)"
          }
          borderWidth={5}
          src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
        /> */}
      </Flex>
      <Center>
        <Flex justifyContent={"space-evenly"} p={"10"} w={"300px"} h={"100%"}>
          <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
            <NavLink
              to={"https://www.linkedin.com/in/varun8177"}
              target={"_blank"}
            >
              <Box>
                <BsLinkedin size="30px" />
              </Box>
            </NavLink>
          </Tooltip>
          <Tooltip hasArrow label="Instagram" bg="gray.300" color="black">
            <NavLink to={""} target={"_blank"}>
              <Box>
                <BsInstagram size="30px" />
              </Box>
            </NavLink>
          </Tooltip>
          <Tooltip hasArrow label="Github" bg="gray.300" color="black">
            <NavLink to={"https://github.com/Varun8177"} target={"_blank"}>
              <Box>
                <BsGithub size="30px" />
              </Box>
            </NavLink>
          </Tooltip>
        </Flex>
      </Center>
    </Box>
  );
};

export default Contact;

// {/* <Box>
//           <FiPhoneCall size="50px" />
//           <Text id="contact-phone">8177836651</Text>
//         </Box> */}
