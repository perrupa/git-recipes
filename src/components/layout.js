/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Header } from "./header"

import "./reset.css"

const Container = styled.main`
  font-family: "Inconsolata";
`

const Layout = ({ title = "Title", children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      <Header siteTitle={data.site.siteMetadata?.title || title} />
      <Container>{children}</Container>
    </main>
  )
}

export default Layout
