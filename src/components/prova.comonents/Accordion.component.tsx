import React from "react";
import { Alert, Button, Card, Col, Nav, ProgressBar } from "react-bootstrap";
import { IMaterias } from "../../interfaces/allintrfaces";
import MyModal from "./modal.component";

type AccordionProps = {
  materias: IMaterias;
  year: number;
};

const Accordion: React.FC<AccordionProps> = ({ materias, year }) => {
  const [materia, setMateria] = React.useState<IMaterias[]>([]);
  const [key, setKey] = React.useState<string>("0");
  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMateria(Object.values(materias));
  }, [materias]);

  // add up all the hits and misses of each subject
  const somar = (materia: IMaterias[]) => {
    let acertos = 0;
    let erros = 0;
    materia.map((item) => {
      acertos += item.acertos.length;
      erros += item.erros.length;
    });
    return { acertos, erros };
  };

  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link eventKey={`#42`} onClick={() => setKey(`#42`)}>
              Resumo Geral
            </Nav.Link>
          </Nav.Item>
          {materia &&
            materia.map((materia, id) => (
              <Nav.Item key={id}>
                <Nav.Link eventKey={`#${id}`} onClick={() => setKey(`#${id}`)}>
                  Prova {materia.id}
                </Nav.Link>
              </Nav.Item>
            ))}
        </Nav>
      </Card.Header>
      <Card.Body>
        {materia &&
          materia.map((materia, id) => (
            <Card key={id} className={key === `#${id}` ? "d-block" : "d-none"}>
              <Card.Header>
                <Card.Title>{materia.name}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>Acertos: {materia.acertos.length}</p>
                  <p>Erros: {materia.erros.length}</p>
                </Card.Text>
                <Button variant="danger" onClick={() => setShow(true)}>
                  Ver solução dos erros
                </Button>
              </Card.Body>
            </Card>
          ))}

        {show && (
          <MyModal showmodal={show} onHide={() => setShow(false)} title="Erros">
            {materia?.map((materia, id) => (
              <Card
                key={id}
                className={key === `#${id}` ? "d-block" : "d-none"}
              >
                <Card.Header>
                  <Card.Title>{materia.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    {materia.erros.map((erro, id) => (
                      <Col xs={12} key={id}>
                        {erro.letter === "X" ? (
                          <Alert
                            key={"danger"}
                            variant={"danger"}
                            className="d-flex"
                          >
                            <p>Prova não aplicada</p>
                          </Alert>
                        ) : (
                          <Alert
                            key={"danger"}
                            variant={"danger"}
                            className="d-flex"
                          >
                            <Col>Questão: {erro.number}</Col>
                            <Col>Letra: {erro.letter}</Col>

                            <a
                              target="_blank"
                              href={`https://www.google.com.br/search?q=${materia.name.replace(
                                /\s/g,
                                "+"
                              )}+quest%C3%A3o+${erro.number}+encceja+${year}`}
                            >
                              ver resposta
                            </a>
                          </Alert>
                        )}
                      </Col>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </MyModal>
        )}

        <Card className={key === `#42` || key === "0" ? "d-block" : "d-none"}>
          <Card.Header>
            <Card.Title>Resumo Geral</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>Você acertou: {somar(materia).acertos} de 120 questões</p>
              <p>Você errou: {somar(materia).erros} de 120 questões</p>
              <p>Seu desempenho foi de: {somar(materia).acertos}%</p>
              <ProgressBar
                variant="success"
                now={somar(materia).acertos}
                label={`${somar(materia).acertos}%`}
                visuallyHidden
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default Accordion;
