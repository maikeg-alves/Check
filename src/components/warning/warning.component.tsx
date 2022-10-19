const Warning: React.FC = () => {
  return (
    <>
      <span>
        <strong>Ainda não tem o modelo do gabarito?</strong> <br />
        sem problemas,{" "}
        <strong>
          <a download={true} href="/Modelo.odt">
            clique aqui
          </a>
        </strong>{" "}
        para baixar o modelo, <strong>preencha</strong>,{" "}
        <strong>
          {" "}
          <a target="_blank" href="https://odt2pdf.com/pt/">
            converta para PDF
          </a>
        </strong>{" "}
        e depois
        <strong> faça o upload </strong>
        do seu arquivo aqui mesmo.
      </span>
    </>
  );
};

export default Warning;
