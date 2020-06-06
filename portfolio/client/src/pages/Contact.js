import React from "react";
import { Container, Row } from "react-materialize";
import ContactForm from "../Components/form/ContactForm";
import CardInfo from "../Components/Cards/CardInfo";

function Contact() {
  return (
    <div>
      <Container>
        <Container>
          <h2 className="white-text">Contact</h2>
        </Container>
      </Container>

      <Container>
        <Container>
          <CardInfo>
            <h4>Email: Jimmynagles@gmail.com</h4>
            <h4>Phone: 3055888834</h4>

            <Row>
              <h5 className="col">
                <a href="">
                  <i className="	fa fa-github"></i>
                </a>
              </h5>

              <h5 className="col">
                <a href="">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </h5>
            </Row>
          </CardInfo>
        </Container>
      </Container>
      <Container>
        <ContactForm></ContactForm>
      </Container>
    </div>
  );
}

export default Contact;
