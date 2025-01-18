import React from "react";
import { Container, Row ,Col} from "react-bootstrap";
import aboitImage from "../../assets/image/a2.jpg"
import TrackVisibility from "react-on-screen";

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
                <img src={"alamir"} alt="about image" className="aboutImage" />
                </div>
                </div>}
                </TrackVisibility>
                </Col>
                <Col sm={12} md={6} xl={8}>
                <div className="about-bx">
                 <h2>About me</h2>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s </p>
                 </div>
                </Col>
            </Row>
        </Container>
      </section>
  )
} 
export default  About;