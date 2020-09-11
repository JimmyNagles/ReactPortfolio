import React from "react";

export default function Card(props) {
  return (
    <div>
      <div class="col s12 m6 l4">
        <div class="card-small transparent center">
          <div class="card-image">
            <img width="250" height="250" src={props.image}></img>
          </div>

          <span class="card-title left-align white-text">{props.title}</span>
          <div class="card-content left-align white-text">
            <h4>{props.info}</h4>
            <h6>{props.tech}</h6>
          </div>

          <div class="card-action">
            <ul>
              <li>
                <a className="orange-text" href={props.link}>
                  github
                </a>
              </li>

              <li>
                <a className="orange-text" href={props.deploy}>
                  Deployed
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
