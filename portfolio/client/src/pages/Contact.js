import React from "react";
import { Container, Row } from "react-materialize";
import ContactForm from "../Components/form/ContactForm";
import CardInfo from "../Components/Cards/CardInfo";
import MyFooter from "../Components/Gird/MyFooter";

function Contact() {
  return (
    <div>
      <Container>
        <Container>
      
        </Container>
      </Container>

      <Container>
        <Container>
          <CardInfo>
            <h4>Email: Jimmynagles@gmail.com</h4>
            <h4>Phone: 3055888834</h4>

            <Row>
              <h5 className="col">
                <a
                  className="white-text"
                  target="_blank"
                  href="https://github.com/JimmyNagles"
                >
                  <i className="	fa fa-github"></i>
                </a>
              </h5>

              <h5 className="col">
                <a
                  className="white-text"
                  target="_blank"
                  href="https://www.linkedin.com/in/jimmy-nagles-89686b191/"
                >
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
