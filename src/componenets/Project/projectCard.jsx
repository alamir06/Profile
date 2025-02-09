
import { Col } from "react-bootstrap";
import viewImage from "../../assets/image/view.png";

export const ProjectCard=(props)=>{

   return(
        <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={props.imgUrl} />
          <div className="proj-txtx">
          <a href={props.link}><img src={viewImage} alt="icon image" className="viewImage"/></a>
            <h4>{props.title}</h4>
            <span>{props.description}</span>
            
          </div>
        </div>
      </Col>
    );
}