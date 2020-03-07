import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { Logo } from "../components/logo"
import { FlexWrapper } from "../components/styled"
import { animated, useSpring } from "react-spring"

const IndexPage = () => {
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
        <animated.div style={fade}>
          <Logo className="logo__component" />
        </animated.div>
      </FlexWrapper>
    </Layout>
  )
}

export default IndexPage
