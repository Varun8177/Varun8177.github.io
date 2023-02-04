import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";

const Home = () => (
  <Box p={5}>
    <Heading as="h1" size="xl">
      My Portfolio
    </Heading>
    <Text mt={4}>Hi, I'm a software developer. Check out my work below:</Text>
    <Box mt={4}>
      <Link href="#projects">Projects</Link>
    </Box>
  </Box>
);

export default Home;
