import { TfiDownload } from "react-icons/tfi";
import ColorModeToggle from "../Darkmode";
import "./Navbar.css";
import * as Scroll from "react-scroll";
import { useDarkMode } from "../../context/DarkModeContext";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

function DefaultNavbar() {
  const { isDark } = useDarkMode();
  return (
    <div className="flex items-center gap-3 lg:gap-5">
      {navLinks.map((link) => (
        <Scroll.Link
          key={link.to}
          to={link.to}
          spy
          smooth
          offset={-100}
          duration={500}
          className={`hover-underline-animation cursor-pointer text-sm font-medium transition-colors duration-200 ${
            isDark ? "hover:text-blue-300" : "hover:text-blue-600"
          }`}
        >
          {link.label}
        </Scroll.Link>
      ))}
      <a
        href="Varun_Ergurala_Resume.pdf"
        download="Varun_Ergurala_Resume.pdf"
        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity duration-200 hover:opacity-85 ${
          isDark ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        }`}
      >
        Resume <TfiDownload />
      </a>
      <ColorModeToggle />
    </div>
  );
}

export default DefaultNavbar;
