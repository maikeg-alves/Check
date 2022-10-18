import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { Main } from "./style";

type Props = {
  justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children, justify, align }) => {
  return (
    <Container>
      <Row className={` justify-content-${justify}  align-items-${align}`}>
        <Main className="col-auto">{children}</Main>
      </Row>
    </Container>
  );
};

export default Layout;
