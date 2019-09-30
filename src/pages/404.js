import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function getImgCat(url){
  if(url !== "")
    return <figure>
        <img src={url} width="350" alt="A random cat picture" />
        <figcaption>
          A random cat picture from <a href="https://aws.random.cat/">random.cat</a>
        </figcaption>
      </figure>
}

class NotFoundPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      urlCat: ""
    }
  }

  componentDidMount(){
    const urlApiRandomCat = "https://aws.random.cat/meow"
    fetch(urlApiRandomCat)
      .then(cat => cat.json())
      .then((cat) => {
        console.log(cat.file)
        this.setState({
          urlCat: cat.file, 
        })
      })
  }

  render(){
    const { urlCat } = this.state

    return (
      <Layout>
        <SEO title="404: Not found" />
        <h1>404 Page not found</h1>
        <p>You just hit a route that doesn&#39;t exist yet.</p>

        <p>
          Come on! Take a cat and keep moving into my site :)
        </p>

        { getImgCat(urlCat) }

      </Layout>
    )
  }
}

export default NotFoundPage
