import { Box, Center, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const SkillItem = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bgColor={colorMode === "light" ? "white" : "#151414"}
      h={"150px"}
      w={"300px"}
      boxShadow="lg"
      borderRadius={"10px"}
      className="skills-card"
    >
      <Image
        src="https://cdn-icons-png.flaticon.com/512/541/541509.png?w=740&t=st=1676155556~exp=1676156156~hmac=eee2a2e05b8ea296fa8a73deda68dcda1fbd902992a704338f4a394d27508090"
        w={"100px"}
        m={"auto"}
        p={"5"}
        className="skills-card-img"
      />
      <Center>
        <Text
          className="skills-card-name"
          color={colorMode === "light" ? "black" : "white"}
        >
          Javascript
        </Text>
      </Center>
    </Box>
  );
};

export default SkillItem;
