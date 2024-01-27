import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SkillItem = ({ logo }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bgColor={colorMode === "light" ? "white" : "#151414"}
      h={{
        base: "auto",
        md: "120px",
        lg: "120px",
        xl: "150px",
        "2xl": "150px",
      }}
      w={{
        base: "100px",
        md: "120px",
        lg: "150px",
        xl: "300px",
        "2xl": "300px",
      }}
      boxShadow="lg"
      borderRadius={"10px"}
      className="skills-card"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      data-aos={"fade-up"}
    >
      <Box
        objectFit={"contain"}
        w={{
          base: "80px",
          md: "80px",
          lg: "80px",
          xl: "100px",
          "2xl": "120px",
        }}
        m={"auto"}
        p={"5"}
      >
        <LazyLoadImage
          src={logo.src}
          className="skills-card-img"
          effect="blur"
        />
      </Box>
      <Text
        className="skills-card-name"
        color={colorMode === "light" ? "black" : "white"}
        fontWeight="semibold"
        textAlign="center"
        mt={2}
        fontSize={{ base: "xs", md: "sm" }}
        textTransform="uppercase"
      >
        {logo.name}
      </Text>
    </Box>
  );
};

export default SkillItem;
