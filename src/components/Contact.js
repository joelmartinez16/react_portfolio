import React from "react";
import 
{
    MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBIcon
} from "mdbreact";

export default function Contact() {
    return (
      <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>Contact Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src=""
            class="float-left pr-4 pb-3 img-fluid"
            alt="Joel Martinez"
          />
  
  <hr className="hr-light w-25" />
        <h3> Phone</h3>
        <hr className="hr-dark w-25" />
        <a href="tel:831.540.5516">
          <MDBIcon icon="phone-alt" /> 831.540.5516
        </a>
        <hr className="hr-light w-25" />
        <h3>E-mail</h3>
        <hr className="hr-dark w-25" />
        <a href="mailto:joemartinez87@hotmail.com">
          <MDBIcon icon="envelope" /> joemartinez87@hotmail.com
        </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
}