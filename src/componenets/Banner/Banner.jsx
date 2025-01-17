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

  const toRotate = [ "React  Developer", "Frontend Developer ", "BackEnd Developer"]
  const toRotate1= ["Fullstack Developer", "Postgress profiecinecy"];

 const [text,setText]= useState('');
 const [text1,setText1]= useState('');
 const [Delta,setDelta]=useState(300-Math.random()*100)
 const period =2000;


 useEffect(()=>{
    let ticker=setInterval(()=>{
         tick();
    },Delta)
    return () =>{clearInterval(ticker)};
 },[text,text1]);


  const tick=()=>{
    let i=loopNum%toRotate.length ;
    let j=loopNum%toRotate1.length ;
    let fullText = toRotate[i];
    let fullText1 = toRotate1[j];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    let updatedText1 = isDeleting ? fullText1.substring(0, text1.length - 1) : fullText1.substring(0, text1.length + 1);
    setText(updatedText);
    setText1(updatedText1);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText1 === fullText1 && updatedText1===fullText1) {
      setIsDeleting(true);
    //   setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '' && updatedText1==='') {
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
          <Col xs={12} md={4} xl={5} >
          <TrackVisibility>
          {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}> 
          <span className="tagline">Hi,Welcome!!!</span>
       
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
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>}
          </TrackVisibility>
           <button className="vvd"><span>Let’s Connect <ArrowRightCircle size={25}/></span></button>
          </Col>
          <Col xs={12} md={8} xl={4}>
          <TrackVisibility>
          {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__swing" : ""}> 
                 <img src={headerimage } alt="Header image" className="headerimage" />
          </div>}
          </TrackVisibility>
 
          </Col>
          <Col xs={12} md={4} xl={3}>
          <br /> <br />
          <TrackVisibility>
          {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}> 
          <h1>{`Wagaw`}<br /> <span className="wrap wrapp"> {text1}</span></h1>
          </div>}
          </TrackVisibility>
          <TrackVisibility>
          {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__flipInX" : ""}> 
          
          </div>}
          </TrackVisibility>
          </Col>
          </Row>
          <Row >
            <Col sm={12} md={6} xl={12} className="navAgain">
            <ul className="nav-list agin">
              <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}> 
          <li className="nav-item"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>Addis Ababa,Ethiopia</a></li>
          
          </div>}
              </TrackVisibility>
              <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounceInUp" : ""}> 
            <li className="nav-item"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>+251921991810</a></li>
          
          </div>}
              </TrackVisibility>
              <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}> 
           <li className="nav-item"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>akliluarse@gmail.com</a></li>
   
          </div>}
              </TrackVisibility>
                  </ul>
            </Col>
          </Row>
</Container>
</section>
);
}