import React from "react";
import { Col, Row } from "react-materialize";

export default function Card(props) {
  return (
    <div>
      <div class="col s12 m6 l4">
        <div class="card-medium  center">
          <div class="card-image">
            <img width="250" height="250" src={props.image}></img>
          </div>

          <span class="card-title left-align white-text">{props.title}</span>
          <div class="card-content left-align white-text">
            <h4>{props.info}</h4>
            <h6>{props.tech}</h6>
          </div>

          <div class="card-action ">

            <Row className="center">

              <Col className="center" s={12} m={6} l={6} >
              <a className="orange-text" href={props.link}>
                  Github
                </a>
              </Col>
              <a className="orange-text" href={props.deploy}>
                  Deployed
                </a>
              <Col className="center" s={12} m={6} l={6} >
              
              </Col>
            </Row>
          
          </div>
        </div>
      </div>
    </div>
  );
}
