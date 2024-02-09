import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import { TfiDownload } from "react-icons/tfi";
import ColorModeToggle from "../Darkmode";
// eslint-disable-next-line no-unused-vars
import "./Navbar.css";
import * as Scroll from "react-scroll";
function DefaultNavbar() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      justifyContent={"space-evenly"}
      alignItems={"center"}
      w={{
        md: "48em",
        lg: "58em",
        xl: "68em",
        "2xl": "60%",
      }}
      id="nav-menu"
      // border={"1px solid blue"}
    >
      {/* Home */}
      <Scroll.Link
        // activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link home hover-underline-animation"
      >
        <Button
          _hover={{ color: colorMode === "light" ? "blue" : "red" }}
          bgColor={colorMode === "light" ? "white" : "black"}
          fontSize={["xs", "sm", "lg", "xl"]}
        >
          Home
        </Button>
      </Scroll.Link>
      {/* About */}
      <Scroll.Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link about hover-underline-animation"
      >
        <Button
          _hover={{ color: colorMode === "light" ? "blue" : "red" }}
          bgColor={colorMode === "light" ? "white" : "black"}
          fontSize={["xs", "sm", "lg", "xl"]}
        >
          About
        </Button>
      </Scroll.Link>
      {/* Skills */}
      <Scroll.Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link skills hover-underline-animation"
      >
        <Button
          _hover={{
            color: colorMode === "light" ? "blue" : "red",
            cursor: "pointer",
          }}
          bgColor={colorMode === "light" ? "white" : "black"}
          fontSize={["xs", "sm", "lg", "xl"]}
        >
          Skills
        </Button>
      </Scroll.Link>
      {/* Projects */}
      <Scroll.Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link projects hover-underline-animation"
      >
        <Button
          _hover={{
            color: colorMode === "light" ? "blue" : "red",
            cursor: "pointer",
          }}
          bgColor={colorMode === "light" ? "white" : "black"}
          fontSize={["xs", "sm", "lg", "xl"]}
        >
          Projects
        </Button>
      </Scroll.Link>
      {/* Contact */}
      <Scroll.Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-link contact hover-underline-animation"
      >
        <Button
          _hover={{
            color: colorMode === "light" ? "blue" : "red",
            cursor: "pointer",
          }}
          bgColor={colorMode === "light" ? "white" : "black"}
          fontSize={["xs", "sm", "lg", "xl"]}
        >
          Contact
        </Button>
      </Scroll.Link>
      {/* Resume */}
      <a
        id="resume-link-1"
        className="nav-link resume"
        href={"Varun_Ergurala_Resume.pdf"}
        download="Varun_Ergurala_Resume.pdf"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/17cTzx5JO8LVlbzWnptj6L2Xp4sPyyx8_/view?usp=share_link"
          );
        }}
      >
        <Button
          id="resume-button-1"
          download="Varun_Ergurala_Resume.pdf"
          _hover={{
            color: colorMode === "light" ? "white" : "black",
            cursor: "pointer",
          }}
          bgGradient={
            colorMode === "light"
              ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
              : "none"
          }
          color={colorMode === "light" ? "black" : "white"}
          bgColor={colorMode === "dark" ? "red" : "none"}
          display="flex"
          alignItems="center"
          fontSize={["xs", "sm", "lg", "xl"]}
        >
          Resume
          <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
            {<TfiDownload />}
          </Box>
        </Button>
      </a>
      <ColorModeToggle />
    </Flex>
  );
}
export default DefaultNavbar;
