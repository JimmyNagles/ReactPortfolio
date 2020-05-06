import React from "react";

import Vone from "../../Videos/Vtwo.mp4";

function Background(props) {
  return (
    <div>
      {props.nav}

      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "49%",
          height: "auto",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={Vone}></source>
      </video>
      <div>{props.content}</div>
    </div>
  );
}

export default Background;
