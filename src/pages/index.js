import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { Logo } from "../components/logo"
import { FlexWrapper, SimpleDiv } from "../components/styled"
import { animated, useSpring } from "react-spring"

const IndexPage = () => {
  const { opacity, scale } = useSpring({
    scale: 1,
    opacity: 1,
    from: { scale: 0.2, opacity: 0 },
  })
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <Layout>
      <FlexWrapper
        minHeight="100vh"
        background="radial-gradient(#ffb73a, #ff2079)"
        className="main-bg"
        padding="5%"
      >
        <SEO title="Home" />
        <SimpleDiv maxWidth="850px" margin="25px">
          <animated.div
            style={{
              opacity,
              transform: scale
                .interpolate({
                  range: [0, 0.35, 0.75, 1],
                  output: [0.2, 0.5, 1.5, 1],
                })
                .interpolate(scale => `scale(${scale})`),
            }}
          >
            <Logo className="logo__component" />
          </animated.div>
        </SimpleDiv>
      </FlexWrapper>
    </Layout>
  )
}

export default IndexPage
