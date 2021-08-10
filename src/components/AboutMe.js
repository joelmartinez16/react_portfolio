import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Picture from "../assets/Images/Joel.png"
export default function AboutMe() {
    return (
      <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          
          <img
            style={{ height: "285px" }}
            src={Picture}
            class="float-left pr-4 pb-3 img-fluid"
            alt="Joel Martinez"
          />
          <p style={{ fontSize: "27px" }}>
            Hey there! My name is Joel. I am an entry level web developer 
            from Banning, Califonria. I am looking to fully imerse myself in this industry
            immediately after graduating. I am willing to relocate for any position that I may
            find. I hope to be able to use the skills that I've learned in this program. In the future I
            hope to bring  different programs to reservations across Indian Country. 

          </p>
          <p style={{ fontSize: "27px",  textAlign: "center"}}>
            The technologies I am familiar with are 
            <ul >
                <li className= "technology-li">HTML and CSS</li>
                <li className= "technology-li">SQL and Sequelize</li>
                <li className= "technology-li">Javascript</li>
                <li className= "technology-li">Mongod</li>
                <li className= "technology-li">Nodejs</li>
                <li className= "technology-li">React</li>
            </ul>
          </p>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
    )
}