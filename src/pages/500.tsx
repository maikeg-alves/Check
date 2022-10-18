import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components";

const ErrorServer = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, [navigate]);

  return (
    <Layout>
      <h1>500</h1>
      <h2>Internal Server Error</h2>
      <img src="./505.svg" />=
    </Layout>
  );
};

export default ErrorServer;
