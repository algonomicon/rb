import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => (
  <Categories>
    <Link to="/algorithms" activeClassName="active" partiallyActive={true}>
      Algorithms
    </Link>
    <Link to="/datasets" activeClassName="active" partiallyActive={true}>
      Explorations
    </Link>
    {/* <Link to="/models" activeClassName="active" partiallyActive={true}>
      Models
    </Link> */}
    <Link to="/thoughts" activeClassName="active" partiallyActive={true}>
      Thoughts
    </Link>
  </Categories>
)

const Categories = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  a {
    margin-right: 2rem;
    font-size: 0.87055rem;
    font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }

  @media screen and (max-width: 600px) {
    overflow-x: hidden;

    a {
      font-size: 0.75rem;
      margin-right: 1.25rem;
    }
  }
`
