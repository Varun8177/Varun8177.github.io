import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  useToast,
  Text,
  Icon,
  useColorMode,
  FormControl,
  FormLabel,
  Link,
  Show,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [load, setLoading] = useState(false);

  const handleToast = (title, description, success) => {
    toast.closeAll();
    toast({
      title,
      description,
      status: success ? "success" : "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "Varun Ergurala",
          from_email: email,
          to_email: "varunergurala9999@gmail.com",
          message: message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      handleToast(
        "Thank you",
        "I will get back to you as soon as possible.",
        true
      );
    } catch (error) {
      handleToast(
        "something went wrong",
        "Please try again in some time",
        true
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box id="contact" py="24">
        <Heading textAlign="center" mb="8">
          Contact Me
        </Heading>
        <Flex maxW="800px" mx="auto" direction={{ base: "column", lg: "row" }}>
          <Show above="lg">
            <Box
              borderRadius={"10px"}
              background={colorMode === "light" ? "white" : "black"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              w={"100%"}
              mb={"30px"}
              p={"5"}
              flex="1"
              mr={{ md: "8" }}
              bgColor={colorMode === "light" ? "white" : "black"}
              alignItems={"center"}
            >
              <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Enter your message"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  mt="8"
                  _hover={{
                    color: colorMode === "light" ? "white" : "black",
                    cursor: "pointer",
                  }}
                  bgGradient={
                    colorMode === "light"
                      ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
                      : "none"
                  }
                  color={colorMode === "light" ? "black" : "white"}
                  bgColor={colorMode === "dark" ? "red" : "none"}
                  fontSize={["xs", "sm", "lg", "xl"]}
                  isLoading={load}
                  leftIcon={<HiOutlineMail />}
                >
                  send
                </Button>
              </form>
            </Box>
          </Show>
          <Show below="lg">
            <Box
              borderRadius={"10px"}
              background={colorMode === "light" ? "white" : "black"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              m={"auto"}
              w={"95%"}
              mb={"30px"}
              p={"5"}
              flex="1"
              mr={{ md: "8" }}
              bgColor={colorMode === "light" ? "white" : "black"}
              alignItems={"center"}
            >
              <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Enter your message"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  mt="8"
                  _hover={{
                    color: colorMode === "light" ? "black" : "white",
                    cursor: "pointer",
                  }}
                  bgGradient={
                    colorMode === "light"
                      ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
                      : "none"
                  }
                  color={colorMode === "light" ? "white" : "black"}
                  bgColor={colorMode === "dark" ? "red" : "none"}
                  borderRadius={"10px"}
                  isLoading={load}
                  leftIcon={<HiOutlineMail />}
                >
                  send
                </Button>
              </form>
            </Box>
          </Show>
          <Box
            borderRadius={"10px"}
            background={colorMode === "light" ? "white" : "black"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            w={{ base: "80%", lg: "fit-content" }}
            mb={"30px"}
            p={"5"}
            m={"auto"}
            overflow={"auto"}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <Heading size="md" mb="4" fontWeight="bold">
                Get in Touch
              </Heading>
              <Flex alignItems="center">
                <Box as="span" mr="2">
                  <Icon as={AiTwotoneMail} boxSize={8} />
                </Box>
                <Link
                  href="mailto:varunergurala9999@mail.com"
                  fontWeight="bold"
                  ml="2"
                  _hover={{ color: "blue.500" }}
                >
                  varunergurala9999@gmail.com
                </Link>
              </Flex>
              <Flex alignItems="center" mt="4">
                <Box as="span" mr="2">
                  <Icon as={AiFillGithub} boxSize={8} />
                </Box>
                <Link
                  href="https://github.com/Varun8177"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontWeight="bold"
                  ml="2"
                  _hover={{ color: "blue.500" }}
                >
                  Varun8177
                </Link>
              </Flex>
              <Flex alignItems="center" mt="4">
                <Box as="span" mr="2">
                  <Icon as={AiFillLinkedin} boxSize={8} />
                </Box>
                <Link
                  href="https://www.linkedin.com/in/varun-ergurala"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontWeight="bold"
                  ml="2"
                  _hover={{ color: "blue.500" }}
                >
                  varun-ergurala
                </Link>
              </Flex>
              <Flex alignItems="center" mt="4">
                <Box as="span" mr="2">
                  <Icon as={IoMdCall} boxSize={8} />
                </Box>
                <Link
                  href="tel:+918177836651"
                  fontWeight="bold"
                  ml="2"
                  _hover={{ color: "blue.500" }}
                >
                  +91 8177836651
                </Link>
              </Flex>
            </motion.div>
          </Box>
        </Flex>
      </Box>
      <Box
        textAlign={"center"}
        bgColor={colorMode === "light" ? "white" : "black"}
        mt={{ base: 4, md: 0 }}
        h={"50px"}
        alignItems={"center"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Text>&copy; All Rights Reserved.</Text>
      </Box>
    </>
  );
};

export default Contact;
