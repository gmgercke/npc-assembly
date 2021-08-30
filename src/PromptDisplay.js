import React from "react";

export default function PromptDisplay(props) {
  if (props.keywordsCat.length > 0 || props.keywordsWar.length > 0) {
    return (
      <div className="PromptDisplay">
        <div className="text-highlight">Your NPC is a</div>
        {props.keywordsCat.map(function (keywordCat, indexCat) {
          return (
            <span key={indexCat} className="keyword-highlight">
              {keywordCat}
            </span>
          );
        })}
        <div className="text-highlight">who provides</div>
        {props.keywordsWar.map(function (keyword, index) {
          return (
            <span key={index} className="keyword-highlight">
              {keyword}
            </span>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="PromptDisplay">
        <div className="text-highlight">
          Please select at least one (1) option.
        </div>
      </div>
    );
  }
}
