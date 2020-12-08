import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const response = useStaticQuery(graphql`
    query posts {
      allMarkdownRemark {
        nodes {
          html
          id
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const posts = response?.allMarkdownRemark?.nodes || []

  console.info(posts)

  return (
    <Layout>
      <SEO title="Home" />
      <p>
        Git can be a bit confusing to use at times, so we've put together some
        of our favourite git commands, arguments and recipes to help you get
        things done and further your understanding of how git works
      </p>

      {posts.map(p => (
        <article key={p.id}>
          <h3>{p.frontmatter.title}</h3>
        </article>
      ))}
    </Layout>
  )
}

export default IndexPage
