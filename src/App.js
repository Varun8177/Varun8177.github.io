import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Box, useColorMode } from '@chakra-ui/react';
import GithubStats from './Pages/GithubStats';

function App() {
  const { colorMode } = useColorMode();
  return (
    <Box className="App" bgColor={colorMode === "light" ? "#f2f2fc" : "black"}>
      <Navbar />
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
