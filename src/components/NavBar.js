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
      color="pink"
      dark
      expand="md"
      style={{ width: "100%" }}

    >
      <MDBNavbarBrand />

      <strong className="white-text">Joel Martinez</strong>

      <MDBNavbarNav right center>

        <MDBNavItem>
          <strong className="white-text">
            <ul>
              <MDBIcon icon="home" className="mr-1" />
              <li onClick={() => props.setPage(props.components[0])}>
                About Me
              </li>
              <MDBIcon fab icon="codepen" className="mr-1" />
              <li onClick={() => props.setPage(props.components[1])}>
                Projects
              </li>
              <MDBIcon icon="envelope" className="mr-1" />
              <li onClick={() => props.setPage(props.components[2])}>
                Contact
              </li>
            </ul>
          </strong>

        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  )
}
