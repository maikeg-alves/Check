import { Col } from "react-bootstrap";
import Layout from "../layout/layout.component";
import { Container } from "./style";

const Loading: React.FC = () => {
  return (
    <Col xs={"auto"}>
      <Container>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </Container>
    </Col>
  );
};

export default Loading;
