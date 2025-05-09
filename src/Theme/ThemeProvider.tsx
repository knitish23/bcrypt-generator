import { useEffect, useState, ReactNode } from "react";
import { Sun, Moon } from "lucide-react";

const LOCAL_STORAGE_KEY = "theme";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4  z-50 p-2 rounded-full  bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 text-white hover:bg-gray-700 transition-all"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      {children}
    </>
  );
};

export default ThemeProvider;
