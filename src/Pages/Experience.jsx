import {
  Box,
  Text,
  Flex,
  ListItem,
  UnorderedList,
  Center,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
const Experience = () => {
  const { colorMode } = useColorMode();
  const experienceData = [
    {
      role: "SDE-Intern",
      location: "Remote",
      start_date: "Sep 2023",
      end_date: "Current",
      company_name: "Masai School",
      works: [
        "Developed and maintained web applications using languages such as HTML, CSS, JavaScript, ReactJS, TypeScript, Redux and Chakra-ui.",
        "This opportunity has allowed me to apply my knowledge and learn from experienced professionals in the industry.",
        "Introduced features such as real-time messaging and notifications.",
        "Handled task assignments according to needs and resolved issues efficiently.",
        "Collaborated on both frontend and backend aspects of www.masaialumni.com",
      ],
    },
  ];
  return (
    <Box id="experience" minH={"70vh"} mt={{ base: "50px", lg: "auto" }}>
      <Center mb={{ base: "20px", md: "40px" }}>
        <Heading>Experience</Heading>
      </Center>
      <Center>
        {experienceData.map((el, i) => (
          <Box
            bg={colorMode === "light" ? "white" : "black"}
            key={i}
            w={{ base: "95%", lg: "70%" }}
            p={{ base: "12px", md: "18px", lg: "20px" }}
            m={{ base: "10px 5%", md: "18px 10px", lg: "20px 10px" }}
            borderRadius={"12px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <Flex justifyContent={"space-between"} fontWeight={"bold"}>
              <Text color={"red"} fontSize="xl">
                {el.company_name}
              </Text>
              <Text fontSize="lg">{el.location}</Text>
            </Flex>

            <Flex
              justifyContent={"space-between"}
              fontWeight={"semibold"}
              fontStyle={"italic"}
            >
              <Text>{el.role}</Text>
              <Text>
                {el.start_date} - {el.end_date}
              </Text>
            </Flex>

            <UnorderedList mt={{ base: "10px", md: "15px", lg: "18px" }}>
              {el.works.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Center>
    </Box>
  );
};

export default Experience;
