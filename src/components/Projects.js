import React from "react";
import 
{
    MDBCardGroup,
    MDBIcon,
    MDBContainer,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,

}  from "mdbreact"
export default function Projects() {
    return (
      <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://project-2-bar-bit.herokuapp.com/"
            alt="BARbit"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">BARbit</MDBCardTitle>
            <MDBCardText>
              This is an application that will allow users to search for a bar
              without being overwhelmed with search options. The user will be able to 
              locate a bar depening on the options they've chosen.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/joelmartinez16/Project2_BAR-bit"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="hhttps://raw.githubusercontent.com/joelmartinez16/work_day_calendar/main/Screen%20Shot%202021-05-03%20at%2010.14.38%20PM.png"
            alt="Work Day Calenday"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Work Day Calendar</MDBCardTitle>
            <MDBCardText>
              This application allows users to input daily activities in a work day calendar.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/joelmartinez16/work_day_calendar"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="https://roberty157.github.io/Recipidia/"
            alt="Recepidia"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Recipedia</MDBCardTitle>
            <MDBCardText>
              This application allows users to search for a recipe by searching a certain ingredient.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/joelmartinez16/Recipidia"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
        
    <MDBCardImage
            src="https://workout-tracker-jjm.herokuapp.com/?id=610c93f4b807c70015b4fe31"
            alt="Workout Tracker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Workout Tracker</MDBCardTitle>
            <MDBCardText>
              This application tracks a users workouts based on the information
              they entered.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/joelmartinez16/Workout_tracker"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
    </MDBContainer>
    )
}