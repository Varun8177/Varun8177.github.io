import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

export default function ColorModeToggle() {
  const { isDark, toggle } = useDarkMode();
  return (
    <button
      onClick={toggle}
      className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
        isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
      }`}
      aria-label="Toggle dark mode"
    >
      {isDark ? <BsSun size={18} /> : <BsMoonStarsFill size={18} />}
    </button>
  );
}
