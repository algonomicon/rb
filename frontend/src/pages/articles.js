import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import Grid from '../components/layout/grid/grid'
import Main from '../components/layout/grid/main'
import Sidebar from '../components/layout/grid/sidebar'
import Search from '../components/sidebar/search'
import Sort from '../components/sidebar/sort'
import Tags from '../components/sidebar/tags'

const Feature = styled.div`
  flex: 0 0 100%;
  position: relative;
`

export default ({ data }) => {
  const [head, ...tail] = data.allSanityArticle.edges
  
  return (
    <Layout>
      <Grid>
        <Main>
          <Feature>
            <Link to={`/articles/${head.node.slug.current}`}>
              <div>
                <img src={head.node.heroImage.asset.url} />
              </div>
              <div>
                <h3>{head.node.title}</h3>
                <p>{head.node.description.substring(0, 100)}...</p>
              </div>
            </Link>
          </Feature>
          <div>
            { tail.map(({ node }) =>
              <div>
                <Link to={`/articles/${node.slug.current}`}>
                  <div>
                    <img src={node.heroImage.asset.url} />
                  </div>
                  <div>
                    <h3>{node.title}</h3>
                    <p>{node.description.substring(0, 100)}...</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </Main>
        <Sidebar>
          <Search />
          <Sort />
          <Tags />
        </Sidebar>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityArticle {
      edges {
        node {
          title,
          slug {
            current
          },
          heroImage {
            asset {
              url
            }
          },
          description
        }
      }
    }
  }
`