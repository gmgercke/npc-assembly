import React, { useState } from "react";
import { categories, wares } from "./Resources";
import Assembly from "./Assembly";
import "./ChoiceCheck.css";

export default function ChoiceCheck() {
  const [checkedCat, setCheckedCat] = useState(
    new Array(categories.length).fill(false)
  );
  const [checkedWar, setCheckedWar] = useState(
    new Array(wares.length).fill(false)
  );

  function handleCheckboxCat(position) {
    const updateCheckedCat = checkedCat.map(function (item, index) {
      if (index === position) {
        return !item;
      } else {
        return item;
      }
    });
    setCheckedCat(updateCheckedCat);
  }
  function handleCheckboxWar(position) {
    const updateCheckedWar = checkedWar.map(function (item, index) {
      if (index === position) {
        return !item;
      } else {
        return item;
      }
    });
    setCheckedWar(updateCheckedWar);
  }

  return (
    <div className="ChoiceCheck">
      {categories.map(function (label, index) {
        return (
          <ul key={index}>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                id={categories[index]}
                checked={checkedCat[index]}
                onChange={() => handleCheckboxCat(index)}
              />
              <label className="form-check-label" htmlFor={categories[index]}>
                {label}
              </label>
            </li>
          </ul>
        );
      })}
      {wares.map(function (label, index) {
        return (
          <ul key={index}>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                id={wares[index]}
                checked={checkedWar[index]}
                onChange={() => handleCheckboxWar(index)}
              />
              <label className="form-check-label" htmlFor={wares[index]}>
                {label}
              </label>
            </li>
          </ul>
        );
      })}
      <Assembly statusCat={checkedCat} statusWar={checkedWar} />
    </div>
  );
}
