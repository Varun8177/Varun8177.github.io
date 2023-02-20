import { Box, Button, Flex, Hide, useColorMode } from "@chakra-ui/react";
import { TfiDownload } from "react-icons/tfi";
import ColorModeToggle from "../Darkmode";
import styes from "./Navbar.css";
import * as Scroll from "react-scroll";

function DefaultNavbar() {
  const { colorMode } = useColorMode();
  return (
    <Hide breakpoint="(max-width: 770px)">
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
            about
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
            skills
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
            projects
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
            contact
          </Button>
        </Scroll.Link>
        {/* Resume */}
        <a
          href="../../images/Varun_Ergurala_Resume.pdf"
          className="nav-link resume"
          id="resume-link-1"
          // id="resume-button-1"
          download="../../images/Varun_Ergurala_Resume.pdf"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/17cTzx5JO8LVlbzWnptj6L2Xp4sPyyx8_/view?usp=share_link"
            );
          }}
        >
          <Button
            id="resume-button-1"
            download="../../images/Varun_Ergurala_Resume.pdf"
            _hover={{
              color: colorMode === "light" ? "black" : "white",
              cursor: "pointer",
            }}
            bgGradient={
              colorMode === "light"
                ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
                : "none"
            }
            color={colorMode === "light" ? "white" : "black"}
            bgColor={colorMode === "dark" ? "red" : "none"}
            borderRadius={"10px"}
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
    </Hide>
  );
}
export default DefaultNavbar;
