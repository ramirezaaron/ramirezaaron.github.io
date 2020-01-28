import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>

    <ul>
      <li>
        Email: <a href="mailto:aaron.rc24@gmail.com">aaron.rc24@gmail.com</a>
      </li>
      <li>
        Twitter: <a href="https://twitter.com/ramirezaaron_" rel="noopener noreferrer">@ramirezaaron_</a>
      </li>
      <li>
        GitHub: <a href="https://github.com/ramirezaaron" rel="noopener noreferrer">ramirezaaron</a>
      </li>
    </ul>
  </Layout>
)

export default Contact
