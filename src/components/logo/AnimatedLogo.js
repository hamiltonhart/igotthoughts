import React from "react"
import IGTLogo from "../../images/IGotThoughtsLogo.png"
import { animated, useSpring, config } from "react-spring"

export const AnimatedLogo = () => {
  const spring = useSpring({
    from: { transform: "scale(0, 0)" },
    transform: "scale(1, 1)",
    config: config.wobbly,
  })
  return (
    <animated.img
      style={spring}
      src={IGTLogo}
      alt="logo"
      className="logo__png"
    />
  )
}
