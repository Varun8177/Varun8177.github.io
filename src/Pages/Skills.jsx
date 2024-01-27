import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SkillItem from "../components/Skills/SkillItem";

const Skills = () => {
  let arr = [
    {
      src: "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/pylwd35ndxnwq15wecau",
      name: "Javascript",
    },
    {
      src: "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/fwdpuobbtgx765g2pa7f",
      name: "HTML",
    },
    {
      src: "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/pyory7i24asdmodzrw6j",
      name: "Git",
    },
    {
      src: "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/gnvc6uwjuasvcb3ydldc",
      name: "React JS",
    },
    {
      src: "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/pqlinzfyqxyxupnfuzqv",
      name: "Node",
    },
    {
      src: "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/oexxrmnw03piv8s5uvea",
      name: "Next JS",
    },
    {
      src: "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/hqkng3uohcs6sdxmqvks",
      name: "Redux",
    },
    {
      src: "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/sxlrrweycrr4v0wpikdm",
      name: "TypeScript",
    },
    {
      src: "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/logos/qkcztqetisncwvrzn8zm",
      name: "Mongo DB",
    },
  ];
  return (
    <Box id="skills">
      <Center mb={{ base: "20px", md: "40px" }}>
        <Heading>Skills</Heading>
      </Center>
      <Box minHeight={{ base: "70vh", md: "100vh" }}>
        <Center>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
            }}
            gap={{ base: 4, md: 6 }}
          >
            {arr.map((item, i) => {
              return <SkillItem key={i} logo={item} />;
            })}
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default Skills;
