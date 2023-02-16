import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Hide,
  IconButton,
  Image,
  Show,
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

import React, { useState } from "react";
import CaptionCarousel from "../Carousal/Carousal";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

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
        p={"5"}
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
    </Hide>
  );
};

function MobileProjectCard() {
  const { colorMode } = useColorMode();

  return (
    <Stack
      borderRadius={"10px"}
      background={colorMode === "light" ? "white" : "black"}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
      w={"100%"}
      // m={"auto"}
      h={{
        sm: "100vh",
        md: "60vh",
        lg: "500px",
      }}
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
          className="project-title"
        >
          Shoperz — Meesho Clone
        </Heading>
        <Image
          w={"10px"}
          src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
        />
        <Grid
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          border={"1px solid black"}
        >
          <Box border={"1px solid black"}>
            <Text mb={"30px"} className="project-description">
              Online Shopping site to buy best quality Fashion, Electronics,
              Home & Kitchen products at lowest prices. I was given meesho.com
              as a project and I was able to succesfully to clone it in a period
              of 5 days
            </Text>
          </Box>
          <Box border={"1px solid red"}>
            <Text as="b">Features in this project</Text>
            <Text>— Sign in and Sign-up using API.</Text>
            <Text>— Filter by category and Sort by price</Text>
            <Text>— User Dashboard</Text>
            <Text>— Admin panel to perform CRUD operations.</Text>
            <Text>— User feedback system</Text>
          </Box>
        </Grid>
        <Grid
          templateColumns={"repeat(2,1fr)"}
          border={"1px solid black"}
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
          <Box>
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
        <Box w={"100%"} h={"50px"}>
          <CaptionCarousel />
        </Box>
      </Box>
      {/* <Grid templateColumns={"repeat(2,1fr)"} gap={"10px"}>
      <Image src={image1} w={"350px"} h={"250px"} />
      <Image src={image2} w={"350px"} h={"250px"} />
      <Image src={image1} w={"350px"} h={"250px"} />
      <Image src={image1} w={"350px"} h={"250px"} />
    </Grid> */}
    </Stack>
  );
}

function MediumProjectCard() {
  const { colorMode } = useColorMode();
  const [i, setI] = useState(0);

  const cards = [image1, image2];

  return (
    <Hide breakpoint="(max-width: 761px)">
      <Stack
        borderRadius={"10px"}
        background={colorMode === "light" ? "white" : "black"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        w={"100%"}
        // m={"auto"}
        h={"700px"}
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
            className="project-title"
          >
            Shoperz — Meesho Clone mid
          </Heading>
          <Image
            w={"10px"}
            src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
          />
          <Grid
            templateColumns={{
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
            }}
            border={"1px solid black"}
          >
            <Box border={"1px solid black"}>
              <Text mb={"30px"} className="project-description">
                Online Shopping site to buy best quality Fashion, Electronics,
                Home & Kitchen products at lowest prices. I was given meesho.com
                as a project and I was able to succesfully to clone it in a
                period of 5 days
              </Text>
            </Box>
            <Box border={"1px solid red"}>
              <Text as="b">Features in this project</Text>
              <Text>— Sign in and Sign-up using API.</Text>
              <Text>— Filter by category and Sort by price</Text>
              <Text>— User Dashboard</Text>
              <Text>— Admin panel to perform CRUD operations.</Text>
              <Text>— User feedback system</Text>
            </Box>
          </Grid>
          <Grid
            templateColumns={"repeat(2,1fr)"}
            border={"1px solid black"}
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
            <Box>
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
          <Box w={"100%"} h={"50px"}>
            {/* Carousal */}
            <Flex
              height={{
                sm: "180px",
                md: "380px",
                lg: "530px",
                xl: "570px",
                "2xl": "570px",
              }}
              width={"100%"}
              alignItems={"center"}
              border={"1px solid red"}
            >
              {/* Left Icon */}
              <IconButton
                aria-label="left-arrow"
                transform={"translate(0%, -50%)"}
                // zIndex={2}
                onClick={() => {
                  i === 0 ? setI(cards.length - 1) : setI(i - 1);
                }}
              >
                <BiLeftArrowAlt size="40px" />
              </IconButton>
              <Image
                transform={"transform .6s"}
                _hover={{ transform: "scale(1.4)", zIndex: "4" }}
                overflow={"hidden"}
                h={{
                  sm: "150px",
                  md: "250px",
                }}
                m={{
                  sm: "auto",
                  md: "auto",
                }}
                w={{
                  sm: "70%",
                  md: "70%",
                  lg: "70%",
                }}
                src={cards[i]}
                boxShadow={"lg"}
              />
              {/* Right Icon */}
              <IconButton
                aria-label="right-arrow"
                transform={"translate(0%, -50%)"}
                // zIndex={2}
                onClick={() => {
                  i === cards.length - 1 ? setI(0) : setI(i + 1);
                }}
              >
                <BiRightArrowAlt size="40px" />
              </IconButton>
            </Flex>
          </Box>
        </Box>
        {/* <Grid templateColumns={"repeat(2,1fr)"} gap={"10px"}>
      <Image src={image1} w={"350px"} h={"250px"} />
      <Image src={image2} w={"350px"} h={"250px"} />
      <Image src={image1} w={"350px"} h={"250px"} />
      <Image src={image1} w={"350px"} h={"250px"} />
    </Grid> */}
      </Stack>
    </Hide>
  );
}
export { ProjectCards, MobileProjectCard, MediumProjectCard };
