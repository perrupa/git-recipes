import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderContainer = styled.header`
  padding: 1em;
  background-color: rgb(255, 55, 5);
`

const HeaderLink = styled(Link)`
  font-size: 2em;
  color: #fff;
  text-decoration: none;
  transition: border 300ms cubic-bezier(0, 0, 1, 1);
  border-bottom: 0 solid;

  &:hover {
    border-bottom: 0.5rem solid;
  }
`
const Title = styled.h1`
  font-family: "Inconsolata";
`

export const Header = ({ siteTitle = "" }) => {
  return (
    <HeaderContainer>
      <Title>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </Title>
    </HeaderContainer>
  )
}

// export default Header
