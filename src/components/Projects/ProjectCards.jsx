import {
  Badge,
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
import { RxGithubLogo } from "react-icons/rx";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import Carousel from "../Carousal/Carousal";
import { motion } from "framer-motion";

const ProjectCards = ({
  direction,
  deployedLink,
  image,
  title,
  subTitle,
  GithubLink,
  features,
  techStack,
  description,
}) => {
  const { colorMode } = useColorMode();
  // eslint-disable-next-line no-unused-vars
  const [showFeatures, setShowFeatures] = useState(true);
  return (
    <Hide below="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
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
              {title}
            </Heading>
            <Heading
              fontSize={{
                sm: "20px",
                md: "25px",
                lg: "30px",
                xl: "54px",
                "2xl": "54px",
              }}
              mb={"20px"}
            >
              — {subTitle}
            </Heading>
            <Image w={"10px"} src="" />
            <Text mb={"30px"} className="project-description">
              {description}
            </Text>
            <Text as="b">Features in this project</Text>
            {showFeatures && (
              <Box>
                {features.map((feature, index) => (
                  <Text key={index}>— {feature}</Text>
                ))}
              </Box>
            )}
            <Flex>
              <Text fontWeight="bold">Tech Stack:</Text>
              <Flex
                maxW={"100%"}
                justifyContent={"space-around"}
                mb={"20px"}
                flexWrap={"wrap"}
                align={"center"}
              >
                {techStack.map((item) => {
                  return (
                    <Box className="project-tech-stack" ml={"5px"} key={item}>
                      <Badge
                        colorScheme={colorMode === "light" ? "blue" : "red"}
                      >
                        #{item}
                      </Badge>
                    </Box>
                  );
                })}
              </Flex>
            </Flex>
            <Link
              to={deployedLink}
              className="project-deployed-link"
              target="_blank"
            >
              <Text as="b" textDecorationLine={"underline"}>
                Website
              </Text>
            </Link>
            <Link
              to={GithubLink}
              className="project-github-link"
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
            <Carousel image={image} />
          </Box>
        </Flex>
      </motion.div>
    </Hide>
  );
};

function MediumProjectCard({
  image,
  deployedLink,
  GithubLink,
  subTitle,
  title,
  description,
  techStack,
}) {
  const { colorMode } = useColorMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <Stack
        borderRadius={"10px"}
        background={colorMode === "light" ? "white" : "black"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        w={"100%"}
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
            {title} — {subTitle}
          </Heading>
          <Box w={"100%"} mb={"10px"}>
            <Carousel image={image} />
          </Box>
          <Grid
            templateColumns={{
              sm: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
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
              <Text mb={"20px"} className="project-description">
                {description}
              </Text>
            </Box>
          </Grid>
          <Grid
            templateColumns={{
              sm: "repeat(1,1fr)",
              md: "70% 30%",
            }}
            alignItems={"baseline"}
          >
            <Flex flexDir={{ base: "column", sm: "row" }}>
              <Text fontWeight="bold">Tech Stack:</Text>
              <Flex
                maxW={{ base: "100%", sm: "80%" }}
                justifyContent={"space-around"}
                mb={"20px"}
                flexWrap={"wrap"}
                align={"center"}
              >
                {techStack.map((item) => {
                  return (
                    <Box className="project-tech-stack" ml={"5px"} key={item}>
                      <Badge
                        colorScheme={colorMode === "light" ? "blue" : "red"}
                      >
                        #{item}
                      </Badge>
                    </Box>
                  );
                })}
              </Flex>
            </Flex>
            <Flex w={"100%"}>
              <Link
                to={deployedLink}
                className="project-deployed-link"
                target="_blank"
              >
                <Text as="b" textDecorationLine={"underline"}>
                  Website
                </Text>
              </Link>
              <Link
                to={GithubLink}
                className="project-github-link"
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
            </Flex>
          </Grid>
        </Box>
      </Stack>
    </motion.div>
  );
}
export { ProjectCards, MediumProjectCard };
