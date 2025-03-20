"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes, FaGlobe, FaSun, FaMoon } from "react-icons/fa";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // 🔹 Kontrolujeme, zda je komponenta na klientovi
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`);
    setLangMenuOpen(false);
  };

  return (
    <header className="bg-[var(--background-color)] dark:bg-[var(--second-background-color)] shadow-md py-4 px-6 rounded-xl mx-auto max-w-[93%] flex items-center justify-between transition-all">
      <Link href="/">
        <img
          src="/img/Logotype.webp"
          alt="logo_bitcoinmaty"
          className="h-10 object-contain"
        />
      </Link>

      <nav className="hidden md:flex gap-6 text-[var(--text-color)]">
        <Link href="/">Home</Link>
        <Link href="/pages/widget">Widget</Link>
        <Link href="https://www.bitaddress.org">BitAddress</Link>
        <Link href="/pages/atms">ATMs</Link>
      </nav>

      {/* Language Switcher */}
      <div className="relative">
        <button
          onClick={() => setLangMenuOpen(!langMenuOpen)}
          className="text-[var(--yellow)]"
        >
          <FaGlobe size={20} />
        </button>
        {langMenuOpen && (
          <ul className="absolute top-full mt-2 bg-[var(--second-background-color)] shadow-lg rounded-md py-2 w-24 text-center">
            <li
              className="cursor-pointer px-4 py-2 hover:bg-[var(--yellow)]"
              onClick={() => changeLanguage("sk")}
            >
              SK
            </li>
            <li
              className="cursor-pointer px-4 py-2 hover:bg-[var(--yellow)]"
              onClick={() => changeLanguage("en")}
            >
              EN
            </li>
          </ul>
        )}
      </div>

      {/* Theme Switcher */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 text-[var(--text-color)]"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      )}

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[var(--yellow)] ml-4"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 right-6 bg-[var(--second-background-color)] shadow-md rounded-md w-48 p-4 flex flex-col gap-4 text-[var(--text-color)] md:hidden">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/widget" onClick={toggleMenu}>
            Widget
          </Link>
          <Link href="https://www.bitaddress.org" onClick={toggleMenu}>
            BitAddress
          </Link>
          <Link href="/atms_list" onClick={toggleMenu}>
            ATMs
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
