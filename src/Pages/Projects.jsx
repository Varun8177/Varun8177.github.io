import { Box, Center, Heading, Show } from "@chakra-ui/react";
import React from "react";
import {
  MediumProjectCard,
  ProjectCards,
} from "../components/Projects/ProjectCards";
import shoperz1 from "../images/Shoperz_banner_1.png";
import shoperz2 from "../images/Shoperz_banner_2.png";
import inside_fashion_1 from "../images/inside_fashion_1.png";
import inside_fashion_2 from "../images/inside_fashion_2.png";
import inside_fashion_3 from "../images/inside_fashion_3.png";
import inside_fashion_4 from "../images/inside_fashion_4.png";
import chargify_1 from "../images/chargify_1.png";
import chargify_2 from "../images/chargify_2.png";
import chargify_3 from "../images/chargify_3.png";
import chargify_4 from "../images/chargify_4.png";
import healthPrime_1 from "../images/healthPrime_1.png";
import healthPrime_2 from "../images/healthPrime_2.png";
import healthPrime_3 from "../images/healthPrime_3.png";
import healthPrime_4 from "../images/healthPrime_4.png";
import healthPrime_5 from "../images/healthPrime_5.png";
import healthPrime_6 from "../images/healthPrime_6.png";
const Projects = () => {
  const shoperz = [shoperz1, shoperz2];
  const insideFashion = [
    inside_fashion_1,
    inside_fashion_2,
    inside_fashion_3,
    inside_fashion_4,
  ];
  const chargify = [chargify_1, chargify_2, chargify_3, chargify_4];
  const HealthPrime = [
    healthPrime_1,
    healthPrime_2,
    healthPrime_3,
    healthPrime_4,
    healthPrime_5,
    healthPrime_6,
  ];
  return (
    <Box
      pl={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      pr={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      id="projects"
    >
      <Center>
        <Heading mb={"40px"}>Projects</Heading>
      </Center>
      <ProjectCards
        direction={"row"}
        deployedLink={"https://shoperz-co.netlify.app/"}
        image={shoperz}
        title={"Shoperz"}
        subTitle={"Meesho Clone"}
        GithubLink={"https://github.com/Varun8177/hollow-idea-9446"}
      />
      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://roasted-geese-6392-xh5g.vercel.app/"}
        image={HealthPrime}
        title={"Health Prime"}
        subTitle={"1mg Clone"}
        GithubLink={"https://github.com/Varun8177/roasted-geese-6392"}
      />
      <ProjectCards
        direction={"row"}
        deployedLink={"https://silly-sable-5035e4.netlify.app/"}
        image={insideFashion}
        title={"Inside Fashion"}
        subTitle={"Myntra Clone"}
        GithubLink={"https://github.com/Varun8177/unwritten-smash-7440"}
      />
      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://chargify.netlify.app/"}
        image={chargify}
        title={"Chargify"}
        subTitle={"Chargebee Clone"}
        GithubLink={"https://github.com/Varun8177/permissible-step-1626"}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={shoperz}
          deployedLink={"https://shoperz-co.netlify.app/"}
          GithubLink={"https://github.com/Varun8177/hollow-idea-9446"}
        />
        <MediumProjectCard
          image={HealthPrime}
          deployedLink={"https://roasted-geese-6392-xh5g.vercel.app/"}
          GithubLink={"https://github.com/Varun8177/roasted-geese-6392"}
        />
        <MediumProjectCard
          image={insideFashion}
          deployedLink={"https://silly-sable-5035e4.netlify.app/"}
          GithubLink={"https://github.com/Varun8177/unwritten-smash-7440"}
        />
        <MediumProjectCard
          image={chargify}
          deployedLink={"https://chargify.netlify.app/"}
          GithubLink={"https://github.com/Varun8177/permissible-step-1626"}
        />
      </Show>
    </Box>
  );
};

export default Projects;
