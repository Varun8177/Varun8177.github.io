import { Box, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <Box id="contact">
      <Heading>Contact</Heading>
      <Flex w={"300px"} justifyContent={"space-around"} mt={"10px"} mb={"20px"}>
        <Tooltip hasArrow label="Phone" bg="gray.300" color="black">
          <Box>
            <FiPhoneCall size="50px" />
            <Text id="contact-phone">8177836651</Text>
          </Box>
        </Tooltip>
        <Tooltip hasArrow label="Email" bg="gray.300" color="black">
          <Box
            onClick={() => {
              window.location.href = "mailto:varunergurala9999@gmail.com";
            }}
          >
            <TfiEmail size="50px" />
            <Text id="contact-email">varunergurala9999@gmail.com</Text>
          </Box>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Contact;
