import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { Logo } from "../components/logo"
import { FlexWrapper } from "../components/styled"

const IndexPage = () => (
  <Layout>
    <FlexWrapper
      minHeight="100vh"
      background="#ffb73a"
      className="main-bg"
      padding="5%"
    >
      <SEO title="Home" />
      <Logo className="logo__component" />
    </FlexWrapper>
  </Layout>
)

export default IndexPage
