import React from "react";
import { useChain, animated } from "react-spring";

export default function Competences() {
  // Build a spring and catch its ref
  const springRef = useSpringRef();
  const props = useSpring({ ...values, ref: springRef });
  // Build a transition and catch its ref
  const transitionRef = useSpringRef();
  const transitions = useTransition({ ...values, ref: transitionRef });
  // First run the spring, when it concludes run the transition
  useChain([springRef, transitionRef]);
  // Use the animated props like always
  return (
    <animated.div style={props}>
      {transitions((styles) => (
        <animated.div style={styles} />
      ))}
    </animated.div>
  );

  // The spring will start right away: 0.0 * 1000ms = 0ms
  // The transition will start after: 0.5 * 1000ms (the timeFrame default) = 500ms
  useChain([springRef, transitionRef], [0, 0.5] /*1000*/);
}
