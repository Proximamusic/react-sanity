import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

export const data = graphql`
  {
    allSanityProduct {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout>
        <div className={styles.textCenter}>
          <ul>
            {data.allSanityProduct.edges.map(({ node }) => {
              return <li key={node.id}>{node.title}</li>
            })}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
