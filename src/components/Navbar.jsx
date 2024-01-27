import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import React, { Suspense, lazy } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const DefaultNavbar = lazy(() => import("./Navbar/DefaultNavbar"));
const MobileNavbar = lazy(() => import("./Navbar/MobileNavbar"));

function Navbar() {
  const { colorMode } = useColorMode();
  const showDefaultNavbar = useMediaQuery({
    query: "(max-width: 770px)",
  });
  return (
    <Box
      zIndex={5}
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

        {!showDefaultNavbar ? (
          <Suspense fallback={<div>loading...</div>}>
            <DefaultNavbar />
          </Suspense>
        ) : (
          <Suspense fallback={<div>loading...</div>}>
            <MobileNavbar />
          </Suspense>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
