import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 10px;
  cursor: pointer;
  display: inline;
  font-size: 12px;
  margin-left: 10px;
  padding: 5px;
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return <ToggleContainer onClick={toggleTheme}>Theme</ToggleContainer>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
