import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

type Recipe = {
  title: string
  summary: string
}

const Card = styled.article``
const Title = styled.h3`
  font-size: 1.5em;
  font-family: Inconsolata;
`
const Summary = styled.p``

export const RecipeCard = (props: Recipe) => {
  return (
    <Card>
      <Title>{props.title}</Title>
      <Summary>{props.summary}</Summary>
    </Card>
  )
}
