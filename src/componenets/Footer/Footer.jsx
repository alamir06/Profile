import { Container, Row, Col } from "react-bootstrap";
import MailchipForm from "../MailChip/MailchipForm";
import Github from "../../assets/image/github.svg";
import Facebook from "../../assets/image/facebook.svg";
import Linkedin from "../../assets/image/linkedin.svg";
import myImage from "../../assets/image/image1.jfif";
import telegram from "../../assets/image/telegram.svg";
import { Telegram } from "react-bootstrap-icons";


 const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center ">
         
          <Col size={12} sm={6}>
            <img src={myImage} alt="Logo" className="footerimage" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon icons">
              <a href="https://github.com/alamir06/"><img src={Github} alt="Icon" /></a>
              <a href="https://linkedin.com/in/alamirewwagaw/"><img src={Linkedin} alt="Icon" /></a>
              <a href="https://web.facebook.com/alamir.alex.7"><img src={Facebook} alt="Icon" /></a>
              <a href="https://web.telegram.org/k/"><img src={telegram} alt="Icon" /></a>
         
            </div>
          
          </Col>
          <Row>
            <Col size={12} sm={12} >
            <p>Copyright &copy; 2025. All Rights  Reserved</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;