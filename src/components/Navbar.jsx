import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
// import { NavLink } from "react-router-dom";

function Navbar() {
  //     Navbar : id="nav-menu"
  // Home section : id="home"
  // About section : id="about" class="about section"
  // Skills section : id="skills"
  // Projects section : id="projects"
  // Contact section : id="contact"
  return (
    <Box id="nav-menu">
      <Flex>
        <Text id="home" _hover={{ color: "red" }}>
          Home
        </Text>
        <Text id="about" class="about section" _hover={{ color: "red" }}>
          about
        </Text>
        <Text id="skills" _hover={{ color: "red" }}>
          skills
        </Text>
        <Text id="projects" _hover={{ color: "red" }}>
          projects
        </Text>
        <Text id="contact" _hover={{ color: "red" }}>
          contact
        </Text>
      </Flex>
    </Box>
  );
}

export default Navbar;
