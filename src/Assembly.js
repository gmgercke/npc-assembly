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
      mood: prompts[0][Math.floor(Math.random() * prompts[0].length)],
      race: prompts[1][Math.floor(Math.random() * prompts[1].length)],
      adjective: prompts[2][Math.floor(Math.random() * prompts[2].length)],
      wares: prompts[3][Math.floor(Math.random() * prompts[3].length)],
    });
  }

  if (ready) {
    return (
      <div className="Assembly">
        <button onClick={generatePrompts}>Hit it!</button>
        <div>
          Your NPC is a:
          <div>
            <span className="keyword-highlight">{keyword.mood}</span>
            <span className="keyword-highlight">{keyword.race}</span>
          </div>
          who provides
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
        <button onClick={generatePrompts}>Hit it!</button>
      </div>
    );
  }
}
