import React, { useState } from "react";
import "./Assembly.css";
import { prompts } from "./Resources";

export default function Assembly() {
  const [ready, setReady] = useState(false);
  const [keyword, setKeyword] = useState({ active: false });

  function generatePrompts() {
    setReady(true);
    setKeyword({
      active: true,
      build: prompts[0][Math.floor(Math.random() * prompts[0].length)],
      mood: prompts[1][Math.floor(Math.random() * prompts[1].length)],
      race: prompts[2][Math.floor(Math.random() * prompts[2].length)],
      adjective: prompts[3][Math.floor(Math.random() * prompts[3].length)],
      wares: prompts[4][Math.floor(Math.random() * prompts[4].length)],
    });
  }

  if (ready) {
    return (
      <div className="Assembly">
        <button className="generate-button" onClick={generatePrompts}>
          Generate
        </button>
        <div>
          <span className="text-highlight">Your NPC is a</span>
          <div>
            <span className="keyword-highlight">{keyword.build}</span>
            <span className="keyword-highlight">{keyword.mood}</span>
            <span className="keyword-highlight">{keyword.race}</span>
          </div>
          <span className="text-highlight">who provides</span>
          <div>
            <span className="keyword-highlight">{keyword.adjective}</span>
            <span className="keyword-highlight">{keyword.wares}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Assembly">
        <button className="generate-button" onClick={generatePrompts}>
          Hit it!
        </button>
      </div>
    );
  }
}
