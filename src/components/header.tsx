import React from "react"
import { Link } from "gatsby"

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle = "" }: Props) => (
  <header>
    <h1 style={{ fontFamily: "Inconsolata" }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

export default Header
