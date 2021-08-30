import React, { useState } from "react";
import "./Assembly.css";
import { promptsCat, promptsWar } from "./Resources";
import PromptDisplay from "./PromptDisplay";

export default function Assembly(props) {
  const [ready, setReady] = useState(false);
  const [keywordCat, setKeywordCat] = useState([]);
  const [keywordWar, setKeywordWar] = useState([]);

  function generatePrompts() {
    const newKeywordCat = [];
    for (let i = 0; i < props.statusCat.length; i++) {
      if (props.statusCat[i] === true) {
        newKeywordCat.push([
          promptsCat[i][Math.floor(Math.random() * promptsCat[i].length)],
        ]);
      }
    }

    setKeywordCat(newKeywordCat);

    const newKeywordWar = [];
    for (let i = 0; i < props.statusWar.length; i++) {
      if (props.statusWar[i] === true) {
        newKeywordWar.push([
          promptsWar[i][Math.floor(Math.random() * promptsWar[i].length)],
        ]);
      }
    }

    setKeywordWar(newKeywordWar);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Assembly">
        <button className="generate-button" onClick={generatePrompts}>
          Generate
        </button>
        <PromptDisplay keywordsCat={keywordCat} keywordsWar={keywordWar} />
      </div>
    );
  } else {
    return (
      <div className="Assembly">
        <button className="generate-button" onClick={generatePrompts}>
          Generate
        </button>
      </div>
    );
  }
}
