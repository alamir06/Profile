import { useState, useEffect } from "react";
import { Col,Row,Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import ColorSharp2 from "../../assets/image/color-sharp2.png";
import Projects from "../data/Project";


  export const Project=()=>{

    return (
    <section className="project" id="project">
         <Container>
            <Row>
             <Col>
               <h2>projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                      <Tab.Pane eventkey="second">hi alamirew</Tab.Pane>
                      <Tab.Pane eventkey="third">hi tabs</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
        </Row>
        </Container>
        <img className="background-image-right" src={ColorSharp2} />
        </section>
    );
}