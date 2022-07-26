import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <a
        className="link-graphiql"
        href="/___graphql?query=%7B%0A%20%20allMarkdownRemark(sort%3A%20%7Bfrontmatter%3A%20%7Bdate%3A%20DESC%7D%7D)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20fields%20%7B%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20date(formatString%3A%20%22MMMM%20DD%2C%20YYYY%22)%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20totalTimeToRead%3A%20sum(field%3A%20%7BtimeToRead%3A%20SELECT%7D)%0A%20%20%20%20group(field%3A%20%7BtimeToRead%3A%20SELECT%7D)%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20fieldValue%0A%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"
      >
        Visit GraphiQL to explore new API
      </a>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
