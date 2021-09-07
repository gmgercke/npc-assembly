import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
    transition: all 300ms linear;
  }

  h1 {
  margin-top: 30px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  transition: all 300ms linear;
}

 
button {
    display: inline block;
    color: ${({ theme }) => theme.text};
    transition: all 300ms linear;
}

.form-check-input {
  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  transition: all 300ms linear;
}

.form-check-input:checked {
background-color: ${({ theme }) => theme.buttonBack};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  transition: all 300ms linear;
}

.form-check-input:focus {
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  transition: all 300ms linear;
}

.generate-button {
    background-color: ${({ theme }) => theme.buttonBack};
    border: 1px solid ${({ theme }) => theme.buttonBorder};
    transition: all 300ms linear;
}

.keyword-highlight {
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.buttonBack};
  transition: all 300ms linear;
`;
