import React from "react";
import {
  MDBNavbarBrand,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBIcon
} from "mdbreact";

export default function NavBar(props) {
  return (

    <MDBNavbar
      color=" light-blue lighten-3"
      dark
      expand="md"
      style={{ width: "100%" }}

    >
      <MDBNavbarBrand />

      <strong className="white-text">Joel Martinez</strong>

      <MDBNavbarNav  right absolute>

        <MDBNavItem>
          <strong className="white-text">
            <ul className= "nav-ul">
              <MDBIcon icon="home" className= "mr-1 nav-icon" />
              <li className= "nav-li" onClick={() => props.setPage(props.components[0])}>
                About Me
              </li>
              <MDBIcon fab icon="codepen" className="mr-1 nav-icon"/>
              <li className= "nav-li" onClick={() => props.setPage(props.components[1])}>
                Projects
              </li>
              <MDBIcon icon="envelope" className="mr-1 nav-icon" />
              <li className= "nav-li" onClick={() => props.setPage(props.components[2])}>
                Contact
              </li>
             
              <MDBIcon far icon="file"  className="mr-1 nav-icon" />
              <li className= "nav-li" onClick={() => props.setPage(props.components[3])}>
                Resume
              </li>
            </ul>
          </strong>

        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  )
}
