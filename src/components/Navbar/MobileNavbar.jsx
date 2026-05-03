import { useState } from "react";
import { TfiDownload } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import * as Scroll from "react-scroll";
import { useDarkMode } from "../../context/DarkModeContext";
import ColorModeToggle from "../Darkmode";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

function MobileNavbar() {
  const { isDark } = useDarkMode();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-2">
      <ColorModeToggle />
      <button
        onClick={() => setOpen((o) => !o)}
        className={`p-2 rounded-lg border transition-colors cursor-pointer ${
          isDark ? "border-gray-600 text-white hover:bg-gray-800" : "border-gray-300 text-gray-900 hover:bg-gray-100"
        }`}
        aria-label="Menu"
      >
        {open ? <IoClose size={20} /> : <RxHamburgerMenu size={20} />}
      </button>

      {open && (
        <div
          className={`absolute top-14 right-0 w-52 rounded-xl shadow-xl border py-2 z-50 ${
            isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          {navLinks.map((link) => (
            <Scroll.Link
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-100}
              duration={500}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm font-medium cursor-pointer transition-colors ${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Scroll.Link>
          ))}
          <div className={`border-t mt-1 pt-2 px-3 pb-1 ${isDark ? "border-gray-700" : "border-gray-200"}`}>
            <a
              href="Varun_Ergurala_Resume.pdf"
              download="Varun_Ergurala_Resume.pdf"
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold ${
                isDark ? "bg-white text-gray-900" : "bg-gray-900 text-white"
              }`}
            >
              Resume <TfiDownload />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;
