import React from "react";

import Vone from "../../Videos/Vtwo.mp4";

function Background(props) {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {props.nav}

      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
          overflow: "hidden",
        }}
      >
        <source src={Vone}></source>
      </video>

      <div
        style={{
          top: "35%",
          position: "absolute",
          transform: "translate(,-50%)",
          width: "100%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Background;
