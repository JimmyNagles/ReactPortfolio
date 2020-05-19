import React from "react";
import { Container, Row, Col } from "react-materialize";

export default function About() {
  return (
    <div>
      <Container>
        <Container>
          <h2 className="white-text">About</h2>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col>
            <h2 className="center">Picture</h2>
          </Col>
          <Col>
            <h2>about me information</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
