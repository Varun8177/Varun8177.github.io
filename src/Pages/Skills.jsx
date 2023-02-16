import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SkillItem from "../components/Skills/SkillItem";

const Skills = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box id="skills">
      <Center mb={{ base: "20px", md: "40px" }}>
        <Heading>Skills</Heading>
      </Center>
      <Box minHeight={{ base: "auto", md: "80vh" }}>
        <Center>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={{ base: 4, md: 6 }}
          >
            {arr.map(() => {
              return <SkillItem />;
            })}
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default Skills;
