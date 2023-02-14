import { Box, Center, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import ProjectCards from "../components/Projects/ProjectCards";

const Projects = () => {
  return (
    <Box pl={20} pr={20} id="projects">
      <Center>
        <Heading mb={"40px"} fontSize={"62px"}>
          Projects
        </Heading>
      </Center>
      <ProjectCards direction={"row"} />
      <ProjectCards direction={"row-reverse"} />
      <ProjectCards direction={"row"} />
      <ProjectCards direction={"row-reverse"} />
    </Box>
  );
};

export default Projects;
