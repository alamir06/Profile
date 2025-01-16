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
                     <div className="skill-dx">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                     </div>
                     <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                        <div className="item">
                            <img src={sk1} alt="image"/>
                            <div className="percent">
                            <img src={skill1} alt="image"/>
                            </div>
                            <h5> frontend Development</h5>
                        </div>
                        <div className="item">
                            <img src={sk2} alt="image"/>
                            <div className="percent">
                            <img src={skill2} alt="image"/>
                            </div>
                            <h5> Backend Development</h5>
                        </div>
                        <div className="item">
                            <img src={sk3} alt="image"/>
                            <div className="percent">
                            <img src={skill3} alt="image"/>
                            </div>
                            <h5> fullStack Development</h5>
                        </div>
                        <div className="item">
                            <img src={sk4} alt="image"/>
                            <div className="percent">
                            <img src={skill1} alt="image"/>
                            </div>
                            <h5> postgress Development</h5>
                        </div>
                      
                     </Carousel>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={Colorsharp} />

        </section>
      );

}