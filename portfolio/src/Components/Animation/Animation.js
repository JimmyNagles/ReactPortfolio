import React from "react";
import { useSpring, animated } from "react-spring";

function Animation() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0 },
  });
  console.log(fade);

  return <div></div>;
}

export default Animation;
