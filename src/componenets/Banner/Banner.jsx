import { useState,useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import myImage from "../../assets/image/image1.jfif";
import headerimage from "../../assets/image/dev.avif";
import TrackVisibility from "react-on-screen";
import  'animate.css';
export const Banner = () => {
 const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "React  Developer", "Frontend Developer ", "BackEnd Developer", "Fullstack Developer", "Postgress profiecinecy"];
 const [text,setText]= useState('');
 const [Delta,setDelta]=useState(300-Math.random()*100)
 const period =2000;


 useEffect(()=>{
    let ticker=setInterval(()=>{
         tick();
    },Delta)
    return () =>{clearInterval(ticker)};
 },[text]);


  const tick=()=>{
    let i=loopNum%toRotate.length ;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    //   setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    //   setIndex(1);
      setDelta(500);
    } else {
    //   setIndex(prevIndex => prevIndex + 1);
    }
  }
  
  return (
<section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}> 
          <span className="tagline">hey,Welcome!!!</span>
       
          </div>}
          </TrackVisibility>
          <TrackVisibility>
          {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}> 
          <h1>{`Hi! I'm Alamirew `}<br /> <span className="wrap"> {text}</span></h1>
          </div>}
          </TrackVisibility>
          <TrackVisibility>
          {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__flipInX" : ""}> 
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
          </div>}
          </TrackVisibility>
           <button className="vvd"><span>Let’s Connect <ArrowRightCircle size={25}/></span></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <img src={headerimage } alt="Header image" className="headerimage" />
          </Col>
          </Row>
</Container>
</section>
);
}