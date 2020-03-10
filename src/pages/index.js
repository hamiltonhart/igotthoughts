import React, { useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { AnimatedLogo } from "../components/logo"
import { FlexWrapper, SimpleDiv } from "../components/styled"

const IndexPage = () => {
  return (
    <Layout>
      <FlexWrapper
        minHeight="100vh"
        background="radial-gradient(#ffb73a, #ff2079)"
        className="main-bg"
        padding="5%"
      >
        <SEO title="Home" />
        <SimpleDiv margin="20px">
          <AnimatedLogo />
        </SimpleDiv>
      </FlexWrapper>
    </Layout>
  )
}

export default IndexPage
