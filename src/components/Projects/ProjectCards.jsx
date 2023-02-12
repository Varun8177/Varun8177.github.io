import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

import React from "react";

const ProjectCards = ({ direction }) => {
  return (
    <Flex
      direction={direction}
      w={"100%"}
      m={"auto"}
      justifyContent={"space-between"}
      h={"80vh"}
      mb={"30px"}
      border={"1px solid black"}
    >
      <Box w={"45%"}>
        <Heading fontSize={"64px"}>Shoperz</Heading>
        <Heading fontSize={"64px"} mb={"20px"}>
          — Meesho Clone
        </Heading>
        <Text mb={"30px"}>
          Online Shopping site to buy best quality Fashion, Electronics, Home &
          Kitchen products at lowest prices. I was given meesho.com as a project
          and I was able to succesfully to clone it in a period of 5 days
        </Text>
        <Text as="b">Features in this project</Text>
        <Text>— Sign in and Sign-up using API.</Text>
        <Text>— Filter by category and Sort by price</Text>
        <Text>— User Dashboard</Text>
        <Text>— Admin panel to perform CRUD operations.</Text>
        <Text>— User feedback system</Text>
        <Flex
          w={"250px"}
          justifyContent={"space-around"}
          mt={"20px"}
          mb={"20px"}
        >
          <Text>Teck Stack —</Text>
          <Box id="contact-github">
            <RxGithubLogo size="30px" border-radius="50%" />
          </Box>
          <Box id="contact-linkedin">
            <BsLinkedin size="30px" />
          </Box>
          <Box id="contact-phone">
            <FiPhoneCall size="30px" />
          </Box>
          <Box id="contact-email">
            <TfiEmail size="30px" />
          </Box>
        </Flex>
        <Link to={"https://shoperz-co.netlify.app/"}>
          <Text as="b" textDecorationLine={"underline"}>
            Website
          </Text>
          <Button ml={"20px"}>
            <RxGithubLogo />
            <Box as="span" ml={"10px"}>
              Github
            </Box>
          </Button>
        </Link>
      </Box>
      {/* <Grid templateColumns={"repeat(2,1fr)"} gap={"10px"}>
          <Image src={image1} w={"350px"} h={"250px"} />
          <Image src={image2} w={"350px"} h={"250px"} />
          <Image src={image1} w={"350px"} h={"250px"} />
          <Image src={image1} w={"350px"} h={"250px"} />
        </Grid> */}
      {/* <CaptionCarousel /> */}
    </Flex>
  );
};

export default ProjectCards;
