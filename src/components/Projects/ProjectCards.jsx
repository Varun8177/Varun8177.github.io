import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Hide,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import image1 from "../../images/Shoperz_banner_1.png";
import image2 from "../../images/Shoperz_banner_2.png";
import { BsLinkedin } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

import React from "react";
import Carousel from "../Carousal/Carousal";

const ProjectCards = ({ direction }) => {
  const { colorMode } = useColorMode();

  return (
    <Hide below="lg">
      <Flex
        borderRadius={"10px"}
        background={colorMode === "light" ? "white" : "black"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        direction={direction}
        w={"100%"}
        m={"auto"}
        justifyContent={"space-evenly"}
        h={"auto"}
        mb={"30px"}
        pl={{
          base: "0",
          sm: "0",
          md: "0",
          lg: "5",
          xl: "5",
          "2xl": "5",
        }}
        pr={{
          base: "0",
          sm: "0",
          md: "0",
          lg: "5",
          xl: "5",
          "2xl": "5",
        }}
        pb={{
          base: "0",
          sm: "0",
          md: "0",
          lg: "5",
          xl: "5",
          "2xl": "5",
        }}
        pt={{
          base: "0",
          sm: "0",
          md: "0",
          lg: "5",
          xl: "5",
          "2xl": "5",
        }}
      >
        <Box w={"40%"} className="project-card">
          <Heading
            fontSize={{
              sm: "20px",
              md: "30px",
              lg: "40px",
              xl: "54px",
              "2xl": "64px",
            }}
            className="project-title"
          >
            Shoperz
          </Heading>
          <Heading
            fontSize={{
              sm: "20px",
              md: "25px",
              lg: "30px",
              xl: "54px",
              "2xl": "64px",
            }}
            mb={"20px"}
          >
            — Meesho Clone
          </Heading>
          <Image
            w={"10px"}
            src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
          />
          <Text mb={"30px"} className="project-description">
            Online Shopping site to buy best quality Fashion, Electronics, Home
            & Kitchen products at lowest prices. I was given meesho.com as a
            project and I was able to succesfully to clone it in a period of 5
            days
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
            <Button
              ml={"20px"}
              bgColor={colorMode === "light" ? "black" : "red"}
              color={colorMode === "light" ? "white" : "black"}
            >
              <RxGithubLogo />
              <Box as="span" ml={"10px"}>
                Github
              </Box>
              <HiExternalLink />
            </Button>
          </Link>
        </Box>
        <Box w={"45%"}>
          <Carousel />
        </Box>
      </Flex>
    </Hide>
  );
};

function MediumProjectCard() {
  const { colorMode } = useColorMode();

  return (
    <Stack
      borderRadius={"10px"}
      background={colorMode === "light" ? "white" : "black"}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
      w={"100%"}
      // m={"auto"}
      h={"800px"}
      mb={"30px"}
      p={"5"}
    >
      <Box w={"100%"} className="project-card">
        <Heading
          fontSize={{
            sm: "20px",
            md: "30px",
            lg: "40px",
            xl: "54px",
            "2xl": "64px",
          }}
          mb={"20px"}
          className="project-title"
        >
          Shoperz — Meesho Clone
        </Heading>
        <Box w={"100%"} mb={"10px"}>
          <Carousel />
        </Box>
        <Grid
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
        >
          <Box
            pr={{
              base: "0",
              sm: "0",
              md: "9",
              lg: "9",
            }}
          >
            <Text as="b">Description</Text>
            <Text mb={"30px"} className="project-description">
              Online Shopping site to buy best quality Fashion, Electronics,
              Home & Kitchen products at lowest prices. I was given meesho.com
              as a project and I was able to succesfully to clone it in a period
              of 5 days
            </Text>
          </Box>
          <Box>
            <Text as="b">Features in this project</Text>
            <Text>— Sign in and Sign-up using API.</Text>
            <Text>— Filter by category and Sort by price</Text>
            <Text>— User Dashboard</Text>
            <Text>— Admin panel to perform CRUD operations.</Text>
            <Text>— User feedback system</Text>
          </Box>
        </Grid>
        <Grid
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          alignItems={"baseline"}
        >
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
          <Box
            templateColumns={{
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
            }}
          >
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
              <Button
                ml={"20px"}
                bgColor={colorMode === "light" ? "black" : "red"}
                color={colorMode === "light" ? "white" : "black"}
              >
                <RxGithubLogo />
                <Box as="span" ml={"10px"}>
                  Github
                </Box>
                <HiExternalLink />
              </Button>
            </Link>
          </Box>
        </Grid>
      </Box>
    </Stack>
  );
}
export { ProjectCards, MediumProjectCard };
