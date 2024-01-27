import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Hide,
  Image,
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
  animation,
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
          data-aos={animation}
          borderRadius={"10px"}
          background={colorMode === "light" ? "white" : "black"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          direction={direction}
          w={"100%"}
          m={"auto"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          h={"auto"}
          mb={"30px"}
          px={{
            base: "0",
            lg: "5",
          }}
          py={{
            base: "0",
            lg: "5",
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

export default ProjectCards;
