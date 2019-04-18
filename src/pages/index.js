import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Usha</h2>
      <p>
        Read <Link to="/blog/">My Blog.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
