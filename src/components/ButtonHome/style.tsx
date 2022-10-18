import styled from "styled-components";

export const Container = styled.div`
  /* From uiverse.io by @alexmaracinaru */

  button {
    border: none;
    background-color: transparent !important;
    padding: 0;
    span {
      padding-bottom: 7px;
      letter-spacing: 4px;
      padding-right: 15px;
      text-transform: uppercase;
      a {
        color: #000;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
      }
    }
  }

  svg {
    transform: translateX(-8px);
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: translateX(0);
  }

  &:active svg {
    transform: scale(0.9);
  }

  .hover-underline-animation {
    position: relative;
    color: black;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
