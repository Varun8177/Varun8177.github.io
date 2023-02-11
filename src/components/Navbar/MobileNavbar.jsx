import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Show,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiDownload } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import ColorModeToggle from "../Darkmode";

function MobileNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Show below="md">
      {/* <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BsHammer />}
          variant="outline"
        /> */}
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        <RxHamburgerMenu />
      </Button>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={{
          base: "sm",
          sm: "sm",
          md: "sm",
        }}
      >
        <DrawerOverlay />
        <DrawerContent display={"block"}>
          <DrawerCloseButton />
          <DrawerHeader>{`drawer contents`}</DrawerHeader>
          {/* Home */}
          <DrawerBody>
            {/* Resume */}
            <NavLink to={"#"} id="contact" class="nav-link contact">
              <Button
                mr={"20px"}
                _hover={{ color: "red", cursor: "pointer" }}
                bgGradient="linear(to-l,#3CAED7 100%, #40BAB6 100%)"
                borderRadius={"17px"}
                fontSize={["xs", "sm", "lg", "xl"]}
              >
                Resume{" "}
                <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
                  {<TfiDownload />}
                </Box>
              </Button>
            </NavLink>

            <ColorModeToggle />
          </DrawerBody>
          <DrawerBody>
            <Stack>
              <NavLink to={"#"} id="home" class="nav-link home">
                <Button
                  _hover={{ color: "red" }}
                  bgColor={"white"}
                  fontSize={["xs", "sm", "lg", "xl"]}
                >
                  Home
                </Button>
              </NavLink>
              {/* About */}
              <NavLink to={"#"} id="about" class="about section">
                <Button
                  _hover={{ color: "red" }}
                  bgColor={"white"}
                  fontSize={["xs", "sm", "lg", "xl"]}
                >
                  about
                </Button>
              </NavLink>
              {/* Skills */}
              <NavLink to={"#"} id="skills" class="nav-link skills">
                <Button
                  _hover={{ color: "red", cursor: "pointer" }}
                  bgColor={"white"}
                  fontSize={["xs", "sm", "lg", "xl"]}
                >
                  skills
                </Button>
              </NavLink>
              {/* Projects */}
              <NavLink to={"#"} id="projects" class="nav-link projects">
                <Button
                  _hover={{ color: "red", cursor: "pointer" }}
                  bgColor={"white"}
                  fontSize={["xs", "sm", "lg", "xl"]}
                >
                  projects
                </Button>
              </NavLink>
              {/* Contact */}
              <NavLink to={"#"} id="contact" class="nav-link contact">
                <Button
                  _hover={{ color: "red", cursor: "pointer" }}
                  bgColor={"white"}
                  fontSize={["xs", "sm", "lg", "xl"]}
                >
                  contact
                </Button>
              </NavLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  );
}
export default MobileNavbar;
