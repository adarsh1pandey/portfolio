import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="HairFair"
              description="A Web App through which you can book your hair cutting session. It can help barber and costumer to save our time. Made this using React and mongoDB"
              ghLink="https://github.com/adarshpnd71/hairfair"
              demoLink="https://github.com/adarshpnd71/hairfair"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Keeper"
              description="Built a Keeper web app using reactJS. Supports adding and removing of texts."
              ghLink="https://github.com/adarshpnd71/keeper"
              demoLink="https://github.com/adarshpnd71/keeper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DrumKit"
              description="Built an artificial drum player using Vanila JavaScript. You can play drum on keypress and clicking on icon of drums."
              ghLink="https://github.com/adarshpnd71/drum"
              demoLink="https://github.com/adarshpnd71/drum"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Tindog"
              description="Made this using HTML, CSS and Boostrap. Made this beautiful website to help dogs to find friends."
              ghLink="https://github.com/adarshpnd71/tindog"
              demoLink="https://github.com/adarshpnd71/tindog"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
