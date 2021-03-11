import React from "react";
import { Container, Row, Col } from "react-materialize";
import Image from "../Components/Image/Image";
export default function About() {
  return (
    <div>
      <Container>
        <Container></Container>
      </Container>

      <Container>
        <Row>
          <Col l={6}>
            <Image></Image>
          </Col>
          <Col l={6}>
            <br></br>
            <br></br>
            <br></br>


            <h5 className="white-text ">
             I'm from Colombia, but I grew up in Miami, Fl. After
              Graduating from highschool, I moved to Gainesville, Fl.
              There, I continued my studies at Santa Fe community college.
            </h5>
            <h5 className="white-text ">
              After attending for a little while, I took a break from my studies to do
              a coding Bootcamp at UC Berkeley.
              At UCB I was taught how to use the MERN stack to build full-stack applications and
              after attending for 6 months I became a full-stack web developer.
            </h5>
            <h5 className="white-text ">
              Following the bootcamp I wanted to keep learning other technologies and improving my skills. Eventually, I got into AWS and 
              some of their services which helped with development time. then I started to get into Blockchain and cryptocurrency.
              Currently, learning about solidity and smart contracts.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
