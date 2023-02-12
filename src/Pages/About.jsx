import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box h={"80vh"}>
      <Center mb={"40px"}>
        <Heading>About me</Heading>
      </Center>
      <Box pl={20} pr={20}>
        <Flex justifyContent={"space-evenly"} w="100%">
          <Box w={"50%"}>
            <Heading id="user-detail-name" mb={"20px"}>
              Hello, my name is Varun Ergurala
            </Heading>
            <Heading mb={"20px"}>I'm a Full Stack Web Developer</Heading>
            <Text id="user-detail-intro">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, ipsum accusantium eligendi minus aliquid pariatur
              expedita reprehenderit sunt repudiandae accusamus repellendus iure
              perspiciatis qui nemo nesciunt exercitationem hic tempora omnis
              unde esse quia praesentium saepe? Esse perferendis exercitationem
              magni eum, ducimus accusamus! Animi, aspernatur deserunt?
              Provident ut consequatur eveniet vero, nostrum asperiores.
              Dolores, fugit sequi!
            </Text>

            <Button
              w={"200px"}
              p={"8"}
              mt={"20px"}
              _hover={{ color: "red", cursor: "pointer" }}
              bgGradient="linear(to-l,#3CAED7 100%, #40BAB6 100%)"
              borderRadius={"10px"}
              fontSize={["xs", "sm", "lg", "xl"]}
            >
              Contact me
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
