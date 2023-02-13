import { Box, Center, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import SkillItem from "../components/Skills/SkillItem";

const Skills = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box id="skills">
      <Center mb={"40px"}>
        <Heading>Skills</Heading>
      </Center>
      <Box h={"80vh"}>
        <Center>
          <Grid
            templateColumns={{
              md: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
              "2xl": "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {arr.map((_) => {
              return <SkillItem />;
            })}
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default Skills;
// Each skills card in the Skills section should have class="skills-card" and the following:
// Image : class="skills-card-img"
// Name : class="skills-card-name"
