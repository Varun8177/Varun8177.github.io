import {
  Flex,
  Heading,
  Icon,
  Box,
  VStack,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { MdCall } from "react-icons/md";
export default function Contacts() {
  const { colorMode } = useColorMode();

  return (
    <Box id="contact">
      <Box
        background={colorMode === "light" ? "white" : "black"}
        pt="20px"
        m="auto"
      >
        <VStack w="80%" m="auto" border={"0px"} alignItems={"center"} pb="10px">
          <Heading color={colorMode === "light" ? "black" : "white"} pb="40px">
            CONTACT ME
          </Heading>
          <Flex justifyContent={"space-between"} w={"100%"}>
            <HStack columnGap={"10px"}>
              <Icon as={ImLocation2} boxSize={8} />
            </HStack>
            <HStack columnGap={"10px"}>
              <a href="tel:8177836651" target={"_blank"} rel="noreferrer">
                <Icon as={MdCall} boxSize={8} />
              </a>
              <Text id="contact-phone" fontWeight={"bold"}></Text>
            </HStack>
            <HStack columnGap={"10px"}>
              <a
                href="mailto:varunergurala9999@gmail.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <Icon as={AiTwotoneMail} boxSize={8} />
              </a>
              <Text id="contact-email" fontWeight={"bold"}></Text>
            </HStack>
            <HStack columnGap={"10px"}>
              <a
                href="https://github.com/Varun8177"
                target={"_blank"}
                rel="noreferrer"
              >
                <Icon as={AiFillGithub} boxSize={8} />
              </a>
              <Text id="contact-github" fontWeight={"bold"}></Text>
            </HStack>

            <HStack columnGap={"10px"}>
              <a
                href="https://www.linkedin.com/in/varun8177/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Icon as={AiFillLinkedin} boxSize={8} />
              </a>
              <Text id="contact-linkedin" fontWeight={"bold"}></Text>
            </HStack>
          </Flex>
        </VStack>
        {/* <Box m="auto" p="10px">
          <Flex
            border={"0px"}
            justifyContent="space-between"
            alignItems={"center"}
            flexDirection={{ base: "column", md: "row" }}
          >
            {/* <Menu>
              <Image w="100px" src={profile}></Image>
            </Menu> */}
        {/* <Flex
              border={"0px"}
              justifyContent="space-around"
              alignItems={"center"}
              w="30%"
            >
              <IconButton
                onClick={() => {
                  window.open("", "_blank");
                }}
                bg="#C7AE92"
                size={"lg"}
                icon={<Icon as={AiFillGithub} boxSize={8} />}
              />
              <IconButton
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/varun8177/",
                    "_blank"
                  );
                }}
                bg="#C7AE92"
                size={"lg"}
                icon={<Icon as={AiFillLinkedin} boxSize={8} />}
              />
            </Flex>
          </Flex> */}
        {/* </Box> */}
      </Box>
    </Box>
  );
}
//document.location.href=#
//email - AiTwotoneMail
// linkdin - AiFillLinkedin
// github - AiFillGithub
// twitter - AiFillTwitterCircle
// location = ImLocation2
// call - IoCallSharp
