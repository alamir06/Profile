import { useState, useEffect } from "react";
import { Col,Row,Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import ColorSharp2 from "../../assets/image/color-sharp2.png";
import Projects,{Projects1} from "../data/Project";
import TrackVisibility from "react-on-screen";
import "animate.css";
  export const Project=()=>{

    return (
    <section className="project" id="project">
         <Container>
            <Row>
             <Col>
             <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
               <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
             </div>}
             </TrackVisibility>
             <Tab.Container id="projects-tabs" defaultActiveKey="first">
             <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                    <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            Projects1.map((Projects1,index)=>{
                              return (
                                <ProjectCard 
                                 key={index}
                                 {...Projects1}
                                />
                              );
                            })
                          }
                        </Row>
                       </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
        </Row>
        </Container>
        <img className="background-image-right" src={ColorSharp2} />
        </section>
    );
}