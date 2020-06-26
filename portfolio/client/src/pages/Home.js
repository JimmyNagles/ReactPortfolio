import React from "react";

import { Row, Col, Container } from "react-materialize";

import Background from "../Components/Gird/Background";

import Card from "../Components/Cards/Card";

import PhotoTwo from "../css/img/Photo (5).jpg";
import PhotoThree from "../css/img/Photo (9).jpg";
import PhotoFour from "../css/img/Photo (11).jpg";
import CardPanel from "../Components/Cards/CardPanel";

import ProjectCard from "../Components/Projects/ProjectsCard";

import Typical from "react-typical";

export default function Home() {
  return (
    <div>
      <Background>
        {" "}
        <CardPanel>
          <Container>
            <Row className="center ">
              <h2>
                {" "}
                <Typical
                  steps={[
                    "Welcome!",
                    1000,
                    "I'm a Full-stack Web Developer",
                    2000,
                    "Take a look and...",
                    1000,
                    "Feel free to contact me if you like!",
                    3000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h2>
            </Row>
          </Container>
        </CardPanel>
      </Background>

      <Container>
        <Row>
          <Col l={12}>
            <h1 className=" white-text">Projects</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <h3 className="center white-text">Collaboration </h3>
        <br></br>
        <Row>
          <Card
            image={PhotoTwo}
            title={<h8>members of the parliment of Zimbabwe</h8>}
            info={
              <h5>
                A project that wants to inform people about who represents them!
                more countries to come.
              </h5>
            }
            tech={"Mongoose Express React Node Materialize"}
            link={"https://github.com/lilaouadi/Project3"}
          />
          <Card
            image={PhotoThree}
            title={<h8>Tatt-it</h8>}
            info={"Search for local tattoo artists"}
            tech={
              "Html Css Javascript Axios NOsql Express and Node.js Materialize"
            }
            link={"https://github.com/jontruong/Project2"}
          />
          <Card
            image={PhotoFour}
            title={<h8>food App</h8>}
            info={" Search for recipes and get the ingredients delivered  "}
            tech={" Css Html Javascript Materialize "}
            link={"https://github.com/dasBottles/project1"}
          />
        </Row>
      </Container>

      <Container>
        <h3 className="center white-text">Personal </h3>
        <ProjectCard />
      </Container>
    </div>
  );
}
