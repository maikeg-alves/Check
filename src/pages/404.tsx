import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components";

const NotFoundPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3500);
  }, [navigate]);

  return (
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <img src="./404.svg" />
    </Layout>
  );
};

export default NotFoundPage;
