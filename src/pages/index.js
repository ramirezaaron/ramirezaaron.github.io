import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import me from '../images/me.jpg'
// How to add font packages: https://www.bricolage.io/typefaces-easiest-way-to-self-host-fonts/
require("typeface-aleo") 

function getMe(){
  return <img src={me} alt="Me" className="me-image" />
}

const IndexPage = () => (
  <Layout>
    <SEO title="Aarón Ramírez" />

    { getMe() }

    <h1>Hi, there. </h1>

    <p>
      I'm a fullstack software developer. I like to write code, enjoy coffee and cats 🐈 
    </p>

    <p>
      I've working for three years as employee and freelance. 
      Now, I'm focused on backend development, using mainly .NET Framework and PHP. 
    </p>

    <p>
      I did some research work while I was student 
      at <a href="http://cua.uam.mx/">Universidad Autónoma Metropolitana</a>. 
      That work addressed tasks related to natural language processing and source 
      code plagiarism detection. There, I used machine learning stuff (algorithms and techniques). <br />
      I had a lot of learning and exciting experiences!
    </p>

    <p>
      If I'm not writing code, you can find me reading (books, news, trends), cooking, 
      biking or enjoying with my family and our cats. 
    </p>

    <p>
      You can check the projects where I'm involved <Link to="projects">here</Link>. 
    </p>

    <p>
      <i>Disclaimer: I apogolize for any typo or mistake on my site. English is not my native language. </i>
    </p>
  </Layout>
)

export default IndexPage
