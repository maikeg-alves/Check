import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { AiTwotoneFileAdd } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import type { IMaterias } from "../../interfaces/allintrfaces";
import { Materias } from "./style";

type CardComponentProps = {
  materias: IMaterias;
  nameuser: string;
  yaer: number;
};

const CardComponent: React.FC<CardComponentProps> = ({
  materias,
  nameuser,
  yaer,
}) => {
  const [materia, setMateria] = React.useState<IMaterias[]>([]);

  const navigation = useNavigate();

  React.useEffect(() => {
    setMateria(Object.values(materias));
  }, [materias]);

  return (
    <Card className="text-center">
      <Card.Header>
        <Col xs={12} className="d-flex justify-content-between">
          <Col xs="auto">
            <h3>Olá, {nameuser}!</h3>
          </Col>

          <Col xs="auto">
            <Button variant="danger" onClick={() => navigation("/")}>
              Sair <IoMdExit />
            </Button>
          </Col>
        </Col>
      </Card.Header>
      <Card.Body>
        <Col xs={12} md={12}>
          <Card.Title> Matérias </Card.Title>
        </Col>
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-center "
        >
          {materia.map((materia, id) => (
            <Col
              key={id}
              className="d-flex align-items-center justify-content-center flex-column"
            >
              <Materias xs={"auto"}>
                <AiTwotoneFileAdd style={{ color: `${materia.color}` }} />
                <Col className="text-bnre">
                  <p>{materia.name}</p>
                </Col>
              </Materias>
            </Col>
          ))}
        </Col>
      </Card.Body>
      <Card.Footer className="text-muted">
        Prova Simulada: <strong>Encceja {yaer}</strong>
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
