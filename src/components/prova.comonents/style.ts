import { Col } from "react-bootstrap";
import styled from "styled-components";

export const Materias = styled(Col)`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 10px;
    overflow: hidden;
    display: -webkit-box;
    line-height: 18px;
    max-height: 55px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;
