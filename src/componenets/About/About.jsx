import React from "react";
import { Container, Row ,Col} from "react-bootstrap";
import aboitImage from "../../assets/image/a2.jpg"
import TrackVisibility from "react-on-screen";
// import abb from "../../assets/image/aboutImage.jfif";
 const About=()=>{


  return (
      <section className="about" id="about">
        <Container>
            <Row className="about-row">
                <Col sm={12} md={6} xl={4}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}> 
                <div className="aboutImage-bx">
                <img src={"about image"} alt="about image" className="aboutImage" />
                </div>
                </div>}
                </TrackVisibility>
                </Col>
                <Col sm={12} md={6} xl={8}>
                <div className="about-bx">
                 <h2>About me</h2>
                 <p>My name is Alamirew wagaw. i'm react developer, frontend developer, backend developer and fullstack developer with Postgress database for relational database and mongodb for non releation database. my passionate is meet customer needs with the modern frameworks React and Expressjs with nodejs run time environment.let's contact me and ask what you want. i would like to express one thing that is i really satisfy you by communication without boring you. </p>
                 </div>
                </Col>
            </Row>
        </Container>
      </section>
  )
} 
export default  About;