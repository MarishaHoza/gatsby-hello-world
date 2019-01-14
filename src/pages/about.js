import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool"/>
    <p>Such wow. Very React.</p>
    <Header headerText="About me" />
    <p>I'm good enough, I'm smart enough, and gosh darn it, people like me!</p>
  </Layout>
)
