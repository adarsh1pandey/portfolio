import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import keeper from "../../Assets/Projects/keeper.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import hairfair from "../../Assets/Projects/hairfair.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import tindog from "../../Assets/Projects/tindog.png";
import drumKit from "../../Assets/Projects/drumkit.png";
import rideBooking from "../../Assets/Projects/rideBooking.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rideBooking}
              isBlog={false}
              title="Ride Sharing App (React Native)"
              description="A simple car pooling application in React Native. Having features like "
              ghLink="https://github.com/adarsh1pandey/rideSharingApp/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce App (React Native)"
              description="A simple ecommerce application in React Native. Having features like "
              ghLink="https://github.com/adarsh1pandey/ecommerce/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hairfair}
              isBlog={false}
              title="HairFair"
              description="A Web App through which you can book your hair cutting session. It can help barber and costumer to save our time. Made this using React and mongoDB"
              ghLink="https://github.com/adarsh1pandey/hairfair"
              // demoLink="https://github.com/adarsh1pandey/hairfair"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper"
              description="Built a Keeper web app using reactJS. Supports adding and removing of texts."
              ghLink="https://github.com/adarsh1pandey/keeper"
              // demoLink="https://github.com/adarsh1pandey/keeper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumKit}
              isBlog={false}
              title="DrumKit"
              description="Built an artificial drum player using Vanila JavaScript. You can play drum on keypress and clicking on icon of drums."
              ghLink="https://github.com/adarsh1pandey/drum"
              // demoLink="https://github.com/adarsh1pandey/drum"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="Tindog"
              description="Made this using HTML, CSS and Boostrap. Made this beautiful website to help dogs to find friends."
              ghLink="https://github.com/adarsh1pandey/tindog"
              // demoLink="https://github.com/adarsh1pandey/tindog"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
