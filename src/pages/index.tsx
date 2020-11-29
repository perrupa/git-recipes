import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Git can be a bit confusing to use at times, so we've put together some of
      our favourite git commands, arguments and recipes to help you get things
      done and further your understanding of how git works
    </p>
  </Layout>
)

export default IndexPage
