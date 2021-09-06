import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./Footer.css";
import logo from "./Ko-fi_Icon_RGB_stroke.png";
import { DarkMode } from "./DarkMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./ThemeStyles";
import { GlobalStyles } from "./GlobalThemes";

export default function Footer() {
  const [theme, toggleTheme] = DarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <footer className="footer">
        <span className="credits">
          made with 💜 by{" "}
          <a
            href="https://github.com/gmgercke/npc-assembly"
            target="_blank"
            rel="noreferrer"
          >
            gmgercke
          </a>
        </span>
        <span className="support">
          <img src={logo} alt="kofi logo" />
          want to support me? Check out{" "}
          <a href="https://ko-fi.com/dorxel" target="_blank" rel="noreferrer">
            Ko-fi
          </a>
          !
        </span>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </footer>
    </ThemeProvider>
  );
}
