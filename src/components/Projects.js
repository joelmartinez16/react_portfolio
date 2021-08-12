import React from "react";
import Barbit from "../assets/Images/Barbit.png";
import Recipedia from "../assets/Images/Recipedia.png";
import WorkDaySchedule from "../assets/Images/WorkDaySchedule.png";
import WorkoutTracker from "../assets/Images/WorkoutTracker.png";


import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,

} from "mdbreact"
export default function Projects() {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <img src={Barbit} style={{ width: "485px" }} alt="BARbit" top className="img-fluid" />
          <h4>BAR-bit</h4>
          <MDBCardText>
            This is an application that will allow users to search for a bar
            without being overwhelmed with search options. The user will be able to
            locate a bar depening on the options they've chosen.
          </MDBCardText>
        </MDBCard>
        <MDBCard className="border border-dark">
          <img src={Recipedia} style={{ width: "485px" }} alt="BARbit" top className="img-fluid" />
          <h4>Recipedia</h4>
          <MDBCardBody>
          <MDBCardText>
            This application allows users to search for a recipe by searching a certain ingredient.
          </MDBCardText>
          
          </MDBCardBody> 
        </MDBCard>
        <MDBCard className="border border-dark">
          <img src={WorkDaySchedule} style={{ width: "485px" }} alt="BARbit" top className="img-fluid" />
          <h4>WorkDay Scheduler</h4>
          <MDBCardText>
            This application allows users to input daily activities in a work day calendar.
          </MDBCardText>
        </MDBCard>
        <MDBCard className="border border-dark">
          <img src={WorkoutTracker} style={{ width: "485px" }} alt="BARbit" top className="img-fluid" />
          <h4>WorkoutTracker</h4>
          <MDBCardText>
            This application allows users to input daily activities in a work day calendar.
          </MDBCardText>
        </MDBCard>
      </MDBCardGroup>

    </MDBContainer>

  )

}