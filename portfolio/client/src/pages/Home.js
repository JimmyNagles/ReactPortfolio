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
            <h2 className="center white-text">Projects</h2>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Card
            image={PhotoFour}
            title={<h8>food Search</h8>}
            info={
              <h5>
                Searchs for recepies of food online using react , axios and
                express{" "}
              </h5>
            }
            link={"google.com"}
          />
          <Card
            image={PhotoOne}
            title={<h8>Online Rock papper Scissor game</h8>}
            info={<h5>A game that was build using the mern stack </h5>}
            link={"google.com"}
          />
          <Card
            image={PhotoThree}
            title={<h8>Tatt-it</h8>}
            info={
              <h5>
                A collaboration project made using js axios nosql express and
                node.js
              </h5>
            }
            link={"https://github.com/jontruong/Project2"}
          />
          <Card
            image={PhotoTwo}
            title={<h8>members of the parliment of zimbawe</h8>}
            info={
              <h5>
                A collaboration project made using the mern stack that hopes to
                inform people about who represents them! more countries to come.
              </h5>
            }
            link={"https://github.com/lilaouadi/Project3"}
          />
        </Row>
      </Container>
    </div>
  );
}
