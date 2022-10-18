import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ButtonHome, Layout, Typewriter } from "../components";
import { MYtypewriter } from "../styles";

const Home: React.FC = () => {
  const [showbtn, setShowbtn] = useState(false);

  const navigate = useNavigate();

  if (typeof window !== "undefined") {
    window.addEventListener("dblclick", () => {
      setShowbtn(true);
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        navigate("/upload");
      }
    });
  }

  return (
    <Layout justify="center">
      <Col xs={12}>
        <Col align="start">
          <h2>
            <strong>SIMULANDO </strong>
          </h2>
        </Col>

        <MYtypewriter className="Typewriter mb-3" align="start">
          <Col>
            <h3>VOCÊ PODE</h3>
          </Col>

          <Typewriter
            text={["APRENDER", "SE PREPARAR", "FAZER DAR CERTO!"]}
            delay={1500}
            speed={100}
            onFinished={() => setShowbtn(true)}
          />
        </MYtypewriter>

        {showbtn && (
          <Col className="showbtn" align="start">
            <ButtonHome>
              <Link to="/upload">vamos lá!</Link>
            </ButtonHome>
          </Col>
        )}
      </Col>
    </Layout>
  );
};

export default Home;
