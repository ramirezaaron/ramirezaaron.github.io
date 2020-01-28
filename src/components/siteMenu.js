import React from "react"
import { Link } from 'gatsby'
import { slide as Menu } from "react-burger-menu";

const SiteMenu = (props) => (
  <Menu {...props}>
    <Link to="/" className="menu-item">
      Home
    </Link>

    <Link to="projects" className="menu-item">
      Projects
    </Link>

    <Link to="contact" className="menu-item">
      Contact
    </Link>
  </Menu>
)
export default SiteMenu 
