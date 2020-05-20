import React from "react";

import { Row, Col, Parallax, Container } from "react-materialize";

import Background from "../Components/Gird/Background";
import Vone from "../Videos/Vone.mp4";
import Prallax from "../Components/Gird/Prallax";
import Card from "../Components/Cards/Card";
import PhotoOne from "../css/img/Photo (2).jpg";
import PhotoTwo from "../css/img/Photo (5).jpg";
import PhotoThree from "../css/img/Photo (9).jpg";
import PhotoFour from "../css/img/Photo (11).jpg";
import CardPanel from "../Components/Cards/CardPanel";
import Example from "../Components/Count/Example";
import ProjectCard from "../Components/Projects/ProjectsCard";
export default function Home() {
  return (
    <div>
      <Background>
        {" "}
        <CardPanel>
          <Container>
            <h1 className="white-text  ">Welcome </h1>
            <h4 className="white-text">
              {" "}
              Full Stack Web Developer specialized in the MERN stack
            </h4>
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
            title={<h8>members of the parliment of zimbawe</h8>}
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
            info={" Search for recipes of food online and get them delivered  "}
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
