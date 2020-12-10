import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { RecipeCard } from "../components/recipe-card"

const IntroText = styled.p`
  font-size: 1.7em;
  margin: 3em 7em 2em;
  line-height: 1.6;
`

const RecipeBook = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1em;

  margin: auto 1em;
`

const IndexPage = () => {
  const response = useStaticQuery(graphql`
    query posts {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        nodes {
          id
          excerpt
          html
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const posts = response?.allMarkdownRemark?.nodes || []
  const title = response?.site?.siteMetadata?.title || "Home"

  console.info(posts)

  return (
    <Layout>
      <SEO title={title} />
      <IntroText>
        Git can be a bit confusing to use at times, so we've put together some
        of our favourite git commands, arguments and recipes to help you get
        things done and further your understanding of how git works
      </IntroText>

      <RecipeBook>
        {posts.map(p => (
          <RecipeCard
            key={p.id}
            title={p.frontmatter.title}
            summary={p.excerpt}
          />
        ))}
      </RecipeBook>
    </Layout>
  )
}

export default IndexPage
