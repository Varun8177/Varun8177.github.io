import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { RxGithubLogo } from "react-icons/rx";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

import React from "react";
import Carousel from "../Carousal/Carousal";
import { motion } from "framer-motion";

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
                md: "9",
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

export default MediumProjectCard;
