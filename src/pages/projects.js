import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const projectList = [
  {
    name: "Electronic Voting System", 
    techs: "ASP.NET MVC, Entity Framework, MySQL, SignalR, HTML/CSS/JavaScript, DevExtreme, IIS Server", 
    tasks: [
      "Database optimization in order to minimize response delays and server load", 
      "New functionalities, improving existing API", 
      "Bug fixing and code optimization", 
      "Update and create data dashboards"
    ], 
    description: "Used for voting inside Congress sessions, handling 25-40 concurrent users with Android devices. Now, operating in three States in México."
  }, 
  {
    name: "Software for ATM machine", 
    techs: "WPF, C# (Backgound Workers), SQLite, HTTP Auth", 
    tasks: [
      "Register payments on remote site", 
      "Show current and past balance account (always updated :)", 
      "Store locally the transactions so in case of internet interruptions this could be synced up", 
      "Screen saver always updated using images previously loaded via FTP", 
      "User login via custom on-screen keyboard or codebar reading"
    ], 
    description: "Process, register and sync payments with an external accountancy system. It affects users' balance on real time."
  }, 
  {
    name: "Accountancy system",
    techs: "CodeIgniter (PHP), jQuery/CSS, RESTful API, MySQL, Apache Server",
    tasks: [
      "Site creation from scratch", 
      "Database views creation", 
      "CRUD operations", 
      "User and password management"
    ], 
    description: "<i>Back-end</i> for ATM machine software. It allows to an admin user create, cancel, process and update users' through payments."
  }, 
  {
    name: "Interactive Map", 
    url: "http://plafomix.qbit.mx/es/modulo-interactivo", 
    techs: "Drupal, Google Maps, KML polygons, jQuery/CSS, Apache Server", 
    tasks: [
      "Delimite polygons on KML files", 
      "Custom markers on Google Maps", 
      "Update map based on filters", 
      "Translation between spanish and english", 
      "Custom module development according to Drupal spec"
    ], 
    description: "Using custom Drupal entities, this module take the coordinates and shows it on the map. It has some filters. "
  }, 
  {
    name: "Clinical History", 
    techs: "ASP.NET MVC, MS SQL", 
    tasks: [
      "Parallel processing focused on reduce HTTP responses and dead browser", 
      "Develop new functionalities", 
      "Backups", 
      "Import/Export data from Excel files"
    ], 
    description: "Management of medical data of users. Doctors update diagnosis and prescribe drugs so the patients can see their clinical status."
  }, 
  {
    name: "Headless WordPress", 
    techs: "WordPress", 
    tasks: [
      "Develop new API endpoints", 
      "Customize WordPress according our needs"
    ], 
    description: "The main goal is to have a separate back-end (WordPress) and a front-end (written in React) for a news site."
  }, 
  {
    name: "Ventro", 
    url: "http://www.ventro.com.mx/", 
    techs: "Java (Vaadin), MySQL, RESTful API, JPA", 
    tasks: [
      "Develop new functionalities", 
      "Create and update reports with Jasper", 
      "Create database views"
    ], 
    description: "Used for residential management, focused on incident report, rent payments and access control. "
  }, 
  {
    name: "MediaWiki update",
    url: "https://dhial.org/diccionario/index.php/P%C3%A1gina_Principal",  
    techs: "MediaWiki, MySQL, RESTful API, JavaScript", 
    tasks: [
      "Upgrade from version 1.15 to 1.33", 
      "Upgrade existing extensions in order to work according to version 1.33", 
      "Improve UI and functionality", 
      "Develop API endpoints", 
      "Create and setting up MediaWiki bot for running massive update tasks"
    ], 
    description: "We needed to upgrade the MediaWiki core. Some custom extensions didn't work with version 1.33, so we update them."
  }, 
  /*{
    name: "", 
    techs: "", 
    tasks: [""], 
    description: ""
  }*/
]

function getTdTasks(tasks){
  const t = tasks.map((task, index) => {
    return <ul key={index}>
      <li>{task}</li>
    </ul>
  })

  return t; 
}

var i = 1
const rows = projectList.map((p, index) => {
  var url = p.url 

  return <Tr key={index}>
      <Td style={{textAlign:"center"}}>{i++}</Td>
      <Td><div className="fix-align">{ url === "" ? p.name : <a href={url}>{p.name}</a>}</div></Td>
      <Td><div className="fix-align">{p.techs}</div></Td>
      <Td className="td-tasks">
        <ul key={index * i} className="fix-align"> 
          {getTdTasks(p.tasks)}
        </ul>
      </Td>
      <Td>
        <div className="fix-align"><span dangerouslySetInnerHTML={{__html: p.description}} /></div>
      </Td> 
    </Tr>
})

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>

    <p>
      Here is a brief list of the main projects where I've worked. 
      Due to privacy concerns, I can't make public all of this.
      But, if you need more info about one, feel free to <Link to="contact">contact me</Link> :)
    </p>

    <p>
      Note: for all of the items listed, I've done update and continuous integration on test and production environment.
      It includes code, database and server configuration. 
    </p>

    <Table>
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Project</Th>
          <Th>Technologies</Th>
          <Th>Tasks</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>

      <Tbody>
        { rows }
      </Tbody>
    </Table>
  </Layout>
)

export default Projects
