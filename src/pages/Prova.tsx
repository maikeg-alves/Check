import React, { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  Layout,
  CardComponent,
  ListGroupMY,
  Accordion,
  AprovadosReprovados,
  Loading,
} from "../components";

import type { IMaterias, ITotal } from "../interfaces/allintrfaces";
import { MyProva } from "../styles";

type User = {
  nameuser: string;
  anoprova: number;
};

const Prova: React.FC = () => {
  const [dataTotal, setDataTotal] = React.useState<ITotal>(
    [] as unknown as ITotal
  );

  const [dataMaterias, setDataMaterias] = React.useState<IMaterias>(
    [] as unknown as IMaterias
  );

  const [paramsuser, setParamsuser] = React.useState<User>();

  const location = useLocation();

  React.useEffect(() => {
    // separating the parameters into two different objects
    if (location.state.data) {
      setDataMaterias(
        location.state.data.slice(0, location.state.data.length - 1)
      );
      setDataTotal(location.state.data.slice(location.state.data.length - 1));

      setParamsuser(location.state.paramsuser);
    }
  }, [location.state.data]);

  return (
    <Layout>
      {!dataMaterias ? (
        <Loading />
      ) : (
        <MyProva xs={12}>
          <Col xs={12}>
            <CardComponent
              materias={dataMaterias}
              yaer={paramsuser?.anoprova as number}
              nameuser={paramsuser?.nameuser as string}
            />
          </Col>

          <Col xs={12}>
            <ListGroupMY {...dataMaterias} />
          </Col>

          <Col xs={12}>
            <AprovadosReprovados {...dataTotal} />
          </Col>

          <Col xs={12}>
            <Accordion
              materias={dataMaterias}
              year={paramsuser?.anoprova as number}
            />
          </Col>
        </MyProva>
      )}
    </Layout>
  );
};

export default Prova;
