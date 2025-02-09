import { Container,Row,Col, Form } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Colorsharp from "../../../src/assets/image/color-sharp.png";
import sk1 from "../../assets/image/react.png"
import sk2 from "../../assets/image/nodejs.jfif"
import sk3 from "../../assets/image/ff.jfif"
import sk4 from "../../assets/image/post.png"
import skill1 from "../../assets/image/meter1.svg"
import skill2 from "../../assets/image/meter2.svg"
import skill3 from "../../assets/image/meter3.svg"
import TrackVisibility from "react-on-screen";
import "animate.css";
import { motion } from 'framer-motion';
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";



export const Skill=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    
          
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                     <div className="skill-bx">  
                       <TrackVisibility>
                               {({ isVisible }) =>
                                     <div className={isVisible ? "animate__animated animate__jackInTheBox" : ""}> 
                                 <h2>Skills</h2>
                                 <p>The following is my Skills in web development.</p>
                               </div>}
                               </TrackVisibility>
                      
                     </div>
                     <Carousel responsive={responsive} infinite={true} className="skill-slider"   >
                    
                        <div className="item">
                       
                            <img src={sk1} alt="image" id="imageb"/>
                            <div className="percent">
                            <img src={skill2} alt="image"/>
                            </div>
                          
                         
                            <h5> Frontend Developer</h5>
                       
                        </div>
                        <div className="item" >
                            <img src={sk2} alt="image"/>
                            <div className="percent">
                            <img src={skill1} alt="image"/>
                            </div>
                            <h5> Backend Developer</h5>
                        </div>
                        <div className="item" >
                            <img src={sk3} alt="image"/>
                            <div className="percent">
                            <img src={skill3} alt="image"/>
                            </div>
                            <h5> FullStack Developer</h5>
                        </div>
                        <div className="item" >
                            <img src={sk4} alt="image"/>
                            <div className="percent">
                            <img src={skill1} alt="image"/>
                            </div>
                            <h5> Postgress Database</h5>
                        </div>
                      
                     </Carousel>
                    
       
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={Colorsharp} />

        </section>
      );

}