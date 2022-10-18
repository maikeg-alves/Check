import React from "react";
import { Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import type { ITotal } from "../../interfaces/allintrfaces";

const AprovadosReprovados: React.FC<ITotal> = (totaldata: ITotal) => {
  const [total, setTotal] = React.useState<ITotal[]>([]);

  React.useEffect(() => {
    setTotal(Object.values(totaldata));
  }, [totaldata]);

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Materias Aprovadas</Accordion.Header>
        <Accordion.Body>
          {total[0]?.aprovadas.map((aprovada, id) => (
            <Col xs={12} key={id}>
              <strong>
                <p style={{ color: "#11ab38" }}>{aprovada}</p>
              </strong>
            </Col>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Materias Reprovadas</Accordion.Header>
        <Accordion.Body>
          {total[0]?.reprovadas.map((reprovada, id) => (
            <Col xs={12} key={id}>
              <strong>
                <p style={{ color: "#ab1125" }}>{reprovada}</p>
              </strong>
            </Col>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AprovadosReprovados;
