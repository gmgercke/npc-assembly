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
      wares: prompts[2][Math.floor(Math.random() * prompts[2].length)],
    });
  }

  if (ready) {
    return (
      <div className="Assembly">
        <button onClick={generatePrompts}>Hit it!</button>
        <div>
          Your NPC is a:
          <br />
          <span>{keyword.mood}</span>
          <br />
          <span>{keyword.race}</span> who sells
          <br />
          <span>{keyword.wares}</span>
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
