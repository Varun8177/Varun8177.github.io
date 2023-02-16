import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Box, StatUpArrow, useColorMode } from '@chakra-ui/react';
import GithubStats from './Pages/GithubStats';
import { BiUpArrow } from 'react-icons/bi';
import { BsArrowUpCircleFill } from 'react-icons/bs';

function App() {
  const { colorMode } = useColorMode();
  return (
    <Box className="App" background={
      colorMode === "light"
        ? "linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)"
        : "linear-gradient(to left, #000000, #434343)"
    }>
      <Navbar />
      <Box top='90vh' position='fixed' left={{
        base: '90%',
        sm: "90%",
        md: "90%",
        lg: "95%",
        xl: "95%",
        "2xl": "95%",
      }} color={colorMode === "light"
        ? "black"
        : "red"} onClick={() => {
          window.scroll({
            top: 0,
            left: 100,
            behavior: 'smooth'
          });
        }}>
        <BsArrowUpCircleFill size={'40px'} />
      </Box>
      <Home />
      <About />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />

    </Box>
  );
}

export default App;
