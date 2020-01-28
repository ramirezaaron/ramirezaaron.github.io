import React from "react"
import { Link } from 'gatsby'
import { slide as Menu } from "react-burger-menu";

const SiteMenu = (props) => (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <Link to="projects" className="menu-item">
        Projects
      </Link>

      <Link to="contact" className="menu-item">
        Contact
      </Link>
    </Menu>
)
export default SiteMenu 
