import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import GithubStats from "./Pages/GithubStats";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Experience from "./Pages/Experience";
import { useDarkMode } from "./context/DarkModeContext";

function App() {
  const { isDark } = useDarkMode();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0d1117] text-white" : "bg-gray-100 text-gray-900"}`}>
      <Navbar />
      <button
        className={`fixed z-50 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer right-6 xl:right-10`}
        style={{ top: "90vh" }}
        onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <BsArrowUpCircleFill
          size={40}
          className={isDark ? "text-blue-400" : "text-gray-900"}
        />
      </button>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubStats />
      <Contact />
    </div>
  );
}

export default App;
