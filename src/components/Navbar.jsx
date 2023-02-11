import { Box, Flex, Heading, Image, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import "@fontsource/poppins/800.css";

function Navbar() {
  const { colorMode } = useColorMode();

  const [logo, setLogo] = useState(false);
  const handleLogo = () => {
    setInterval(() => {
      setLogo(true);
    }, 2000);
  };
  useEffect(() => {
    handleLogo();
  }, []);

  return (
    <Box
      border={"1px solid black"}
      position={"sticky"}
      top={0}
      bgColor={colorMode === "light" ? "white" : "black"}
    >
      <Flex
        h={"70px"}
        id="nav-menu"
        justifyContent={"space-between"}
        pl={["2", "2", "10"]}
        border={"1px solid red"}
        alignItems={"center"}
      >
        {logo ? (
          <Box>
            <Heading fontFamily={"Clicker Script"}>
              V
              <Box as="span" fontSize={"md"} fontWeight={"normal"}>
                arun
              </Box>
            </Heading>
          </Box>
        ) : (
          <Image
            src="https://cliply.co/wp-content/uploads/2021/08/472108440_HELLO_STICKER_400px.gif"
            w={["50px", "70px", "70px"]}
            h={["50px", "70px", "70px"]}
          />
        )}
        <DefaultNavbar />
        <MobileNavbar />
      </Flex>
    </Box>
  );
}

export default Navbar;
