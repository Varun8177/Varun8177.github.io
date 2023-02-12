import {
  Box,
  Button,
  Flex,
  Hide,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { TfiDownload } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import ColorModeToggle from "../Darkmode";

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
        // border={"1px solid blue"}
      >
        {/* Home */}
        <NavLink to={"#"} id="home" class="nav-link home">
          <Button
            _hover={{ color: "red" }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Home
          </Button>
        </NavLink>
        {/* About */}
        <NavLink to={"#"} id="about" class="about section">
          <Button
            _hover={{ color: "red" }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            about
          </Button>
        </NavLink>
        {/* Skills */}
        <NavLink to={"#"} id="skills" class="nav-link skills">
          <Button
            _hover={{ color: "red", cursor: "pointer" }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            skills
          </Button>
        </NavLink>
        {/* Projects */}
        <NavLink to={"#"} id="projects" class="nav-link projects">
          <Button
            _hover={{ color: "red", cursor: "pointer" }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            projects
          </Button>
        </NavLink>
        {/* Contact */}
        <NavLink to={"#"} id="contact" class="nav-link contact">
          <Button
            _hover={{ color: "red", cursor: "pointer" }}
            bgColor={colorMode === "light" ? "white" : "black"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            contact
          </Button>
        </NavLink>
        {/* Resume */}
        <NavLink to={"#"} id="contact" class="nav-link contact">
          <Button
            _hover={{ color: "red", cursor: "pointer" }}
            bgGradient="linear(to-l,#3CAED7 100%, #40BAB6 100%)"
            borderRadius={"10px"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Resume{" "}
            <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
              {<TfiDownload />}
            </Box>
          </Button>
        </NavLink>

        <ColorModeToggle />
      </Flex>
    </Hide>
  );
}
export default DefaultNavbar;
