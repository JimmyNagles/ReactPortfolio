import React from "react";
import { useSpring, animated } from "react-spring";

function Animation() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0 },
  });
  console.log(fade);

  return (
    <animated.div style={fade}>
      <h2>helloo world</h2>
    </animated.div>
  );
}

export default Animation;
