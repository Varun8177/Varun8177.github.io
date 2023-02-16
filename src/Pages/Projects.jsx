import { Box, Center, Heading, Show, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  MediumProjectCard,
  MobileProjectCard,
  ProjectCards,
} from "../components/Projects/ProjectCards";

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
      <Show breakpoint="(max-width: 760px)">
        <MobileProjectCard direction={"row"} />
        <MobileProjectCard direction={"row-reverse"} />
        <MobileProjectCard direction={"row"} />
        <MobileProjectCard direction={"row-reverse"} />
      </Show>
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard />
        <MediumProjectCard />
        <MediumProjectCard />
        <MediumProjectCard />
      </Show>
    </Box>
  );
};

export default Projects;
