import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ColorModeToggle from "./Darkmode";
import logo from "../images/protfolio-icon.png";

function Navbar() {
  //     Navbar : id="nav-menu"
  // Home section : id="home"
  // About section : id="about" class="about section"
  // Skills section : id="skills"
  // Projects section : id="projects"
  // Contact section : id="contact"
  return (
    <Flex
      id="nav-menu"
      borderWidth={5}
      animation={"ease-in-out"}
      animation-delay={"2s"}
    >
      <Image src={logo} w={"200px"} />
      <Flex justifyContent={"space-evenly"} w={"60%"}>
        <Text id="home" _hover={{ color: "red" }}>
          Home
        </Text>
        <Text
          id="about"
          class="about section"
          _hover={{ color: "red" }}
          onClick={() => {
            window.scroll({
              top: 100,
              left: 0,
            });
          }}
          _active={{ top: 100 }}
        >
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
        <ColorModeToggle />
      </Flex>
    </Flex>
  );
}

export default Navbar;
