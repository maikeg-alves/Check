import { Form } from "react-bootstrap";
import styled from "styled-components";

export const MYUpload = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  input {
    display: none;
  }

  label {
    cursor: pointer;
    display: inline-block;
    padding: 5.5rem 2rem;
    font-size: 5rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    span {
      p {
        font-size: 19px;
        word-break: break-all;
        white-space: normal;
        margin: 0;
      }
    }
  }
  label:hover {
    color: #fff;
    background-color: #5e5f5f;
    border-color: #5e5f5f;
  }

  label:active {
    color: #fff;
    background-color: #5e5f5f;
    border-color: #5e5f5f;
  }

  label:disabled {
    color: #5e5f5f;
    background-color: #fff;
  }

  label:not(:disabled):not(.disabled):active,
  label:not(:disabled):not(.disabled).active {
    background-image: none;
  }
`;
