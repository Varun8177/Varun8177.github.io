import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

import React from "react";
import CaptionCarousel from "../Carousal/Carousal";

const ProjectCards = ({ direction }) => {
  return (
    <Flex
      borderRadius={"10px"}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
      direction={direction}
      w={"100%"}
      m={"auto"}
      justifyContent={"space-evenly"}
      h={"90vh"}
      mb={"30px"}
      p={"5"}
    >
      <Box w={"40%"} className="project-card">
        <Heading fontSize={"64px"} className="project-title">
          Shoperz
        </Heading>
        <Heading fontSize={"64px"} mb={"20px"}>
          — Meesho Clone
        </Heading>
        <Image
          w={"10px"}
          src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
        />
        <Text mb={"30px"} className="project-description">
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
          <Box class="project-tech-stack">
            <RxGithubLogo size="30px" border-radius="50%" />
          </Box>
          <Box class="project-tech-stack">
            <BsLinkedin size="30px" />
          </Box>
          <Box class="project-tech-stack">
            <FiPhoneCall size="30px" />
          </Box>
          <Box class="project-tech-stack">
            <TfiEmail size="30px" />
          </Box>
        </Flex>
        <Link
          to={"https://shoperz-co.netlify.app/"}
          class="project-deployed-link"
          target="_blank"
        >
          <Text as="b" textDecorationLine={"underline"}>
            Website
          </Text>
        </Link>
        <Link
          to={"https://github.com/Varun8177/hollow-idea-9446.git"}
          class="project-github-link"
          target="_blank"
        >
          <Button ml={"20px"}>
            <RxGithubLogo />
            <Box as="span" ml={"10px"}>
              Github
            </Box>
            <HiExternalLink />
          </Button>
        </Link>
      </Box>
      {/* <Grid templateColumns={"repeat(2,1fr)"} gap={"10px"}>
          <Image src={image1} w={"350px"} h={"250px"} />
          <Image src={image2} w={"350px"} h={"250px"} />
          <Image src={image1} w={"350px"} h={"250px"} />
          <Image src={image1} w={"350px"} h={"250px"} />
        </Grid> */}
      <Box w={"45%"}>
        <CaptionCarousel />
      </Box>
    </Flex>
  );
};

export default ProjectCards;
