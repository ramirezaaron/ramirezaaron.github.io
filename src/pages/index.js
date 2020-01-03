import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Aarón Ramírez" />
    <h1>Hi </h1>
    <p>Welcome to my website.</p>

    <p>
      I'm a mexican <code>[web|mobile|desktop]</code> programmer. I like write code, enjoy cofee and pet cats 🐈 
    </p>
    <p>
      <span role="img" aria-label="construction">🚧</span> This site is under construction and many things will be changed. 🚧
    </p>

    <p>
      Janaury, 2020: <br />
      Update: <Link to="projects">Here</Link> I'll be updating the list of projects where I'm involved. 
    </p>

    <p>
      You can find <a href="https://twitter.com/ramirezaaron_" target="_blank">me</a> on Twitter. 
      Also, via <a href="mailto:aaron.rc24@gmail.com" target="_top">e-mail</a>: aaron[dot]rc24[at]gmail[dot]com
    </p>

    <p>
      <i>Disclaimer: I apogolize for any typo or mistake on my site. English is not my native language. </i>
    </p>
  </Layout>
)

export default IndexPage
