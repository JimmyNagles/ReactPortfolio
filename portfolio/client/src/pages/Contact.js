import React from "react";
import { Container } from "react-materialize";
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

            <h5>
              <i className="	fa fa-github"></i>
            </h5>

            <h5>
              <i className="fa fa-linkedin-square"></i>
            </h5>
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
