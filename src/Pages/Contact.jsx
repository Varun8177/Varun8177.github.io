import {
  Box,
  Center,
  Flex,
  Heading,
  Hide,
  Image,
  Show,
  Stack,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import profile from "../images/new_profile.png";

const Contact = () => {
  const { colorMode } = useColorMode();
  return (
    <Center
      pl={{
        base: "10",
        sm: "15",
        md: "20",
        lg: "20",
        xl: "20",
        "2xl": "20",
      }}
      pr={{
        base: "10",
        sm: "15",
        md: "20",
        lg: "20",
        xl: "20",
        "2xl": "20",
      }}
      h={{
        base: "100vh",
        sm: "100vh",
        md: "100vh",
        lg: "100vh",
        xl: "100vh",
        "2xl": "100vh",
      }}
      id="contact"
    >
      <Flex>
        <Flex justifyContent={"space-evenly"} w="100%">
          <Box>
            <Heading
              id="user-detail-name"
              mb={"20px"}
              fontSize={{
                base: "30px",
                sm: "30px",
                md: "40px",
                lg: "60px",
                xl: "64px",
                "2xl": "72px",
              }}
            >
              Connect with me
            </Heading>
            <Heading
              mb={"20px"}
              fontSize={{
                sm: "20px",
                md: "25px",
                lg: "30px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Heading>
            {/* <Text
              w={{
                base: "80%",
                sm: "80%",
                md: "55%",
                lg: "55%",
                xl: "55%",
                "2xl": "55%",
              }}
            >
              I approach each project with a sense of resourcefulness, always
              seeking to find clever and practical solutions to the challenges
              at hand. Through careful planning and strategic thinking, I am
              able to deliver results that exceed expectations. Let's work
              together to make something truly extraordinary - contact me today
              to begin the journey!"
            </Text> */}
            <Hide below="md">
              <Stack
                w={"300px"}
                justifyContent={"space-around"}
                mt={"10px"}
                mb={"20px"}
              >
                <Tooltip hasArrow label="Github" bg="gray.300" color="black">
                  <NavLink
                    to={"https://github.com/Varun8177"}
                    target={"_blank"}
                  >
                    <Flex id="contact-github">
                      <RxGithubLogo size="50px" border-radius="50%" />
                      <Heading
                        fontSize={{
                          sm: "20px",
                          md: "20px",
                          lg: "20px",
                          xl: "20px",
                          "2xl": "20px",
                        }}
                        alignSelf={"center"}
                        ml={"20px"}
                      >
                        Varun8177
                      </Heading>
                    </Flex>
                  </NavLink>
                </Tooltip>
                <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
                  <NavLink
                    to={"https://www.linkedin.com/in/varun8177"}
                    target={"_blank"}
                  >
                    <Flex id="contact-linkedin">
                      <BsLinkedin size="50px" />
                      <Heading
                        fontSize={{
                          sm: "20px",
                          md: "20px",
                          lg: "20px",
                          xl: "20px",
                          "2xl": "20px",
                        }}
                        alignSelf={"center"}
                        ml={"20px"}
                      >
                        varun-ergurala
                      </Heading>
                    </Flex>
                  </NavLink>
                </Tooltip>
                <Tooltip hasArrow label="Phone" bg="gray.300" color="black">
                  <Flex id="contact-phone">
                    <FiPhoneCall size="50px" />
                    <Heading
                      fontSize={{
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                        xl: "20px",
                        "2xl": "20px",
                      }}
                      alignSelf={"center"}
                      ml={"20px"}
                    >
                      +91 8177836651
                    </Heading>
                  </Flex>
                </Tooltip>
                <Tooltip hasArrow label="Email" bg="gray.300" color="black">
                  <Flex
                    id="contact-email"
                    onClick={() => {
                      window.location.href =
                        "mailto:varunergurala9999@gmail.com";
                    }}
                  >
                    <TfiEmail size="50px" />
                    <Heading
                      fontSize={{
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                        xl: "20px",
                        "2xl": "20px",
                      }}
                      alignSelf={"center"}
                      ml={"20px"}
                    >
                      varun
                    </Heading>
                  </Flex>
                </Tooltip>
              </Stack>
            </Hide>
            <Show below="md">
              <Flex
                w={"150px"}
                justifyContent={"space-around"}
                mt={"10px"}
                mb={"20px"}
              >
                <Tooltip hasArrow label="Github" bg="gray.300" color="black">
                  <NavLink
                    to={"https://github.com/Varun8177"}
                    target={"_blank"}
                  >
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
                      window.location.href =
                        "mailto:varunergurala9999@gmail.com";
                    }}
                  >
                    <TfiEmail size="20px" />
                  </Box>
                </Tooltip>
              </Flex>
            </Show>
          </Box>
        </Flex>
        {/* Profile photo */}
        <Image
          className="home-img"
          bgColor={"white"}
          borderRadius={"50%"}
          h={{
            base: "100px",
            sm: "100px",
            md: "100px",
            lg: "300px",
          }}
          w={{
            base: "100px",
            sm: "100px",
            md: "100px",
            lg: "300px",
          }}
          src={
            "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
          }
        />
      </Flex>
    </Center>
  );
};

export default Contact;

// {/* <Box>
//           <FiPhoneCall size="50px" />
//           <Heading id="contact-phone">8177836651</Heading>
//         </Box> */}
