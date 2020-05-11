import React from "react";

import Vone from "../../Videos/Vtwo.mp4";

function Background(props) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100%",
        maxHeight: "100%",
        overflow: "hidden",
      }}
    >
      
      {props.nav}

      <video
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <source src={Vone} type="video/mp4"></source>
      </video>

      <div
        style={{
          position: "absolute",
          top: "0",
          color: "black",
          backgroundColor: "rgba(0,0,0,0)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
        }}
      >
        {props.children}
      </div>

      
    </div>
  );
}

export default Background;
