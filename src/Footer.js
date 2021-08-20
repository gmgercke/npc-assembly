import React from "react";
import "./Footer.css";
import logo from "./Ko-fi_Icon_RGB_stroke.png";

export default function Footer() {
  return (
    <footer>
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
    </footer>
  );
}
