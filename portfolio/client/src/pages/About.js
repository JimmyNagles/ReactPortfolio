import React from "react";
import { Container, Row, Col } from "react-materialize";

export default function About() {
  return (
    <div>
      <Container>
        <Container>
          <h2 className="white-text center">About</h2>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col l={6}>
            <h2 className="white-text center">Picture</h2>
          </Col>
          <Col l={6}>
            <h5 className="white-text ">
              I'm from Bogota, Colombia. However, I grew up in Miami, Fl. After
              living in Miami for most of my life, I moved to Gainesville, Fl.
              There, I continued my studies at Santa Fe community college. after
              attending for almost 2 years, I got a bit frustrated with the
              curriculum so I decided to take a break from my studies to attend
              a coding Bootcamp at UC Berkeley Extension. At UCB I was taught
              how to use the MERN stack to build full-stack applications and
              after attending for 6 months I became a full-stack web developer.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
