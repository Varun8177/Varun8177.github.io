import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Hide,
  Show,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { TfiDownload, TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Home() {
  const { colorMode } = useColorMode();
  const AnimatedFlex = motion(Flex);

  return (
    <Center
      px={{
        base: "10",
        sm: "15",
        md: "20",
      }}
      h="100vh"
      id="home"
    >
      <Flex justifyContent={"space-evenly"} w="100%">
        <Box>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              id="user-detail-name"
              mb={"20px"}
              fontSize={{
                base: "30px",
                md: "40px",
                lg: "60px",
                xl: "64px",
                "2xl": "72px",
              }}
            >
              <Typewriter
                options={{
                  strings: ["Hello", "My name is Varun Ergurala"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </Heading>
          </motion.div>

          <Heading
            mb={"20px"}
            fontSize={{
              sm: "20px",
              md: "25px",
              lg: "30px",
            }}
          >
            I'm a Full Stack Web Developer
          </Heading>
          <Text
            id="user-detail-intro"
            w={{
              base: "80%",
              md: "55%",
            }}
          >
            Aspiring Full Stack Web Developer who loves solving problems and
            building projects. I am equipped with a variety of technologies and
            tools to help me build the best possible product.
          </Text>
          <Hide below="md">
            <AnimatedFlex
              w={"300px"}
              justifyContent={"space-around"}
              mt={"10px"}
              mb={"20px"}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Tooltip hasArrow label="Github" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <NavLink
                    to={"https://github.com/Varun8177"}
                    target={"_blank"}
                  >
                    <Box id="contact-github" cursor="pointer">
                      <RxGithubLogo size="50px" border-radius="50%" />
                    </Box>
                  </NavLink>
                </motion.div>
              </Tooltip>
              <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <NavLink
                    to={"https://www.linkedin.com/in/varun8177"}
                    target={"_blank"}
                  >
                    <Box id="contact-linkedin" cursor="pointer">
                      <BsLinkedin size="50px" />
                    </Box>
                  </NavLink>
                </motion.div>
              </Tooltip>
              <Tooltip hasArrow label="Phone" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Box id="contact-phone" cursor="pointer">
                    <FiPhoneCall size="50px" />
                  </Box>
                </motion.div>
              </Tooltip>
              <Tooltip hasArrow label="Email" bg="gray.300" color="black">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Box
                    id="contact-email"
                    onClick={() => {
                      window.location.href =
                        "mailto:varunergurala9999@gmail.com";
                    }}
                    cursor="pointer"
                  >
                    <TfiEmail size="50px" />
                  </Box>
                </motion.div>
              </Tooltip>
            </AnimatedFlex>
          </Hide>
          <Show below="md">
            <Flex
              w={"150px"}
              justifyContent={"space-around"}
              mt={"10px"}
              mb={"20px"}
            >
              <Tooltip hasArrow label="Github" bg="gray.300" color="black">
                <NavLink to={"https://github.com/Varun8177"} target={"_blank"}>
                  <Box id="contact-github">
                    <RxGithubLogo size="20px" border-radius="50%" />
                  </Box>
                </NavLink>
              </Tooltip>
              <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
                <NavLink
                  to={"https://www.linkedin.com/in/varun8177"}
                  target={"_blank"}
                >
                  <Box id="contact-linkedin">
                    <BsLinkedin size="20px" />
                  </Box>
                </NavLink>
              </Tooltip>
              <Tooltip hasArrow label="Phone" bg="gray.300" color="black">
                <Box id="contact-phone">
                  <FiPhoneCall size="20px" />
                </Box>
              </Tooltip>
              <Tooltip hasArrow label="Email" bg="gray.300" color="black">
                <Box
                  id="contact-email"
                  onClick={() => {
                    window.location.href = "mailto:varunergurala9999@gmail.com";
                  }}
                >
                  <TfiEmail size="20px" />
                </Box>
              </Tooltip>
            </Flex>
          </Show>
          <a
            id="resume-link-2"
            href={"Varun_Ergurala_Resume.pdf"}
            download="Varun_Ergurala_Resume.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <Button
              id="resume-button-2"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/17cTzx5JO8LVlbzWnptj6L2Xp4sPyyx8_/view?usp=share_link",
                  "_blank"
                );
              }}
              _hover={{
                color: colorMode === "light" ? "white" : "black",
                cursor: "pointer",
              }}
              bgGradient={
                colorMode === "light"
                  ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
                  : "none"
              }
              color={colorMode === "light" ? "black" : "white"}
              bgColor={colorMode === "dark" ? "red" : "none"}
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
    </Center>
  );
}

export default Home;
