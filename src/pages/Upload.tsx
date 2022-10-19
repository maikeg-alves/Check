import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TbFileUpload } from "react-icons/tb";

import { Layout } from "../components";
import { MYUpload } from "../styles";

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Content-Type", "application/json");

type FormData = {
  name: string;
  Email: string;
  year: number;
  file: FileList;
};

const Upload: React.FC = () => {
  const [upload, setUpload] = React.useState(false);

  const navigation = useNavigate();

  const { VITE_BASE_URL, VITE_API_KEY } = process.env;

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    if (data.name && data.Email && data.year) {
      setUpload(true);

      if (data.file) {
        const file = data.file[0];
        const fileType = file.type;
        const validImageTypes = ["application/pdf"];
        if (!validImageTypes.includes(fileType)) {
          alert("Please upload a pdf file");

          return;
        }
        const formData = new FormData();
        formData.append("files", data.file[0]);

        await fetch(`${VITE_BASE_URL}/api/upload?year=${data.year}`, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((datajson) => {
            const { name, year } = data;

            const paramsuser = {
              nameuser: name,
              anoprova: year,
            };

            navigation("/prova", {
              state: { data: datajson.data, paramsuser },
            });
          })
          .catch((err) => {
            err && navigation("/500");
          });
      }
    }
  });

  return (
    <Layout>
      <Col xs={12} style={{ maxWidth: "350px" }}>
        <Form onSubmit={onSubmit}>
          {upload ? (
            <>
              <MYUpload className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <Col>
                    <TbFileUpload />
                    <span className="ml-2 text-break">
                      <p>
                        faça upload do seu arquivo <strong>.pdf</strong>{" "}
                        clicando aqui
                      </p>
                    </span>
                  </Col>
                </Form.Label>
                <Form.Control
                  type="file"
                  {...register("file", { required: true, pattern: /.pdf$/ })}
                  placeholder="Insira seu email"
                />
                <Form.Text className="text-muted">
                  {errors.file?.type === "required" && (
                    <span style={{ color: "red" }}>
                      Este campo é obrigatório!! <br />
                    </span>
                  )}

                  <span>
                    <strong>Ainda não tem o modelo do gabarito?</strong> sem
                    problemas,
                    <strong>
                      <a download={true} href="#">
                        clique aqui
                      </a>
                    </strong>
                    para baixar o modelo, <strong>preencha</strong> e depois
                    <strong>faça o upload </strong>
                    do seu arquivo aqui mesmo.
                  </span>
                </Form.Text>
              </MYUpload>
            </>
          ) : (
            <>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  type="text"
                  {...register("name", {
                    required: true,
                    pattern: /^[a-zA-Z]+$/,
                  })}
                  placeholder="Insira seu nome"
                  style={{
                    border: errors.name ? "2px solid red" : "1px solid #ced4da",
                  }}
                />

                <Form.Text className="text-muted">
                  {errors.name ? (
                    <p style={{ color: "red" }}>Campo Nome obrigatório</p>
                  ) : (
                    "Nós nunca compartilharemos seu nome com ninguém."
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder="Insira seu email"
                  style={{
                    border: errors.Email
                      ? "2px solid red"
                      : "1px solid #ced4da",
                  }}
                />
                <Form.Text className="text-muted">
                  {errors.Email && (
                    <p style={{ color: "red" }}>Campo Email obrigatório</p>
                  )}
                  Nós nunca compartilharemos seu email com ninguém.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Selecione o ano de prova </Form.Label>
                <Form.Select {...register("year")}>
                  <option disabled>selecione um ano </option>
                  <option value={2020}>2020</option>
                  <option value={2019}>2019</option>
                  <option value={2018}>2018</option>
                  <option value={2017}>2017</option>
                </Form.Select>
              </Form.Group>
            </>
          )}

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={
              errors.name || errors.Email || errors.year || errors.file
                ? true
                : false
            }
          >
            {upload ? "Enviar" : "Próximo"}
          </Button>
        </Form>
      </Col>
    </Layout>
  );
};

export default Upload;
