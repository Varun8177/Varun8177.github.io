import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { colorMode } = useColorMode();

  return (
    <Box
      zIndex={5}
      // border={"1px solid black"}
      position={"sticky"}
      top={0}
      bgColor={colorMode === "light" ? "white" : "black"}
    >
      <Flex
        h={"70px"}
        justifyContent={"space-between"}
        pl={["2", "2", "10"]}
        // border={"1px solid red"}
        alignItems={"center"}
      >
        <NavLink to={"https://varun8177.github.io/"}>
          <Image
            src={
              colorMode === "light"
                ? "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/z8nblqi6l1xfpkunbw8u"
                : "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/qrocvi4gq4ecyjazkj7q"
            }
            w={"250px"}
          />
        </NavLink>

        <DefaultNavbar />
        <MobileNavbar />
      </Flex>
    </Box>
  );
}

export default Navbar;
