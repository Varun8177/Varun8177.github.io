import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import PortfolioLogo from "../images/protfolio-icon.png";

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
        id="nav-menu"
        justifyContent={"space-between"}
        pl={["2", "2", "10"]}
        // border={"1px solid red"}
        alignItems={"center"}
      >
        <Image src={PortfolioLogo} w={"150px"} />

        <DefaultNavbar />
        <MobileNavbar />
      </Flex>
    </Box>
  );
}

export default Navbar;
