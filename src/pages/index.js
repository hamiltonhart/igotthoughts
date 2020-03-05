import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { Logo } from "../components/logo"
import { FlexWrapper } from "../components/styled"

const IndexPage = () => (
  <Layout>
    <FlexWrapper height="100vh" background="#ffe427" className="main-bg">
      <SEO title="Home" />
      <Logo className="logo__component" />
    </FlexWrapper>
  </Layout>
)

export default IndexPage
