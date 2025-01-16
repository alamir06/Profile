import { Container, Row, Col } from "react-bootstrap";
import MailchipForm from "../MailChip/MailchipForm";
import Github from "../../assets/image/github.svg";
import Facebook from "../../assets/image/facebook.svg";
import Linkedin from "../../assets/image/linkedin.svg";
import myImage from "../../assets/image/image1.jfif"

 const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={myImage} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={Github} alt="Icon" /></a>
              <a href="#"><img src={Linkedin} alt="Icon" /></a>
              <a href="#"><img src={Facebook} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;