import styled from "styled-components";

export const Container = styled.div`
  /* From uiverse.io by @gagan-gv */
  span {
    font-size: 22px;
    font-family: monospace;
    font-weight: 600;
    animation: blur 3s linear infinite;
    line-height: 20px;
    transition: all 0.5s;
    letter-spacing: 0.2em;
    color: black;
  }

  @keyframes blur {
    0%,
    90% {
      filter: blur(0);
    }

    50% {
      filter: blur(10px);
    }
  }
`;
