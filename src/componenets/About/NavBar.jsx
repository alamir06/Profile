import {Container,Navbar,Nav} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Logo from "../../assets/image/logo.svg";
import Github from "../../assets/image/github.svg";
import Facebook from "../../assets/image/facebook.svg";
import Linkedin from "../../assets/image/linkedin.svg";
import myImage from "../../assets/image/image1.jfif"

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand className='navlogo'>
            <img src={myImage } alt="Logo" /><span>|Alamirew Wagaw</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contact</Nav.Link>
          
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={Logo} alt="" /></a>
                <a href="#"><img src={Github} alt="" /></a>
                <a href="#"><img src={Linkedin} alt="" /></a>
              </div>
              {/* <HashLink to='#connect'> */}
                <button className="vvd" id='#connect'><span>Let’s Connect</span></button>
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </Router>
  )
}