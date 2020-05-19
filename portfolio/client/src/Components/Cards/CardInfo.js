import React from "react";

function CardInfo(props) {
  return <div className="card-panel transparent white-text"> {props.children}</div>;
}

export default CardInfo;
