import React from "react";

function CardPanel(props) {
  return (
    <div>
      <div className=" transparent ">{props.children}</div>
    </div>
  );
}

export default CardPanel;
