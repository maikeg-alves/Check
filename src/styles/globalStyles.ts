import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #333;
    background-color: #fff;
    width: 100%;
}

/* a {
  color: inherit;
  text-decoration: none;
} */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
}

p {
  word-break: break-all;
  white-space: normal;
}

`;
