import React from "react";
import { Badge, Col, ListGroup } from "react-bootstrap";
import { useMediaQuery } from "../../assets/responsivesize/responsive";
import type { IMaterias } from "../../interfaces/allintrfaces";

const ListGroupMY: React.FC<IMaterias> = (materias: IMaterias) => {
  const [materia, setMateria] = React.useState<IMaterias[]>([]);

  React.useEffect(() => {
    setMateria(Object.values(materias));
  }, [materias]);

  // set the breakpoint to 350px
  const mobile = useMediaQuery(350);

  return (
    <>
      <ListGroup as="ol" numbered>
        {materia &&
          materia.map((materia, id) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              key={id}
            >
              <Col xs={12} className="d-flex justify-content-center">
                <Col xs={"auto"} className="ms-2 me-auto">
                  <div className="fw-bold">Prova {materia.id}</div>
                  <Col className="textGrup">
                    <p style={{ fontSize: `${mobile ? "10px" : "15px"}` }}>
                      {materia.name}
                    </p>
                  </Col>
                </Col>

                <Col xs={"auto"} className="my-auto">
                  <Badge bg="success" pill>
                    {materia.acertos.length < 9
                      ? `0${materia.acertos.length}`
                      : materia.acertos.length}
                  </Badge>
                  <Badge bg="danger" pill>
                    {materia.erros.length < 9
                      ? `0${materia.erros.length}`
                      : materia.erros.length}
                  </Badge>
                </Col>
              </Col>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default ListGroupMY;
