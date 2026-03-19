import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>
                  SDE I, <span className="purple">CARS24</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Oct 2024 – Present
                </Card.Subtitle>
                <Card.Text as="div" style={{ textAlign: "left" }}>
                  <ul style={{ paddingLeft: "1.2rem", marginBottom: 0 }}>
                    <li>
                      Built features for UAE Consumer + Dealer apps serving{" "}
                      <b>1M+</b> users.
                    </li>
                    <li>
                      Led zero-downtime React Native <b>0.66 → 0.74</b> migration
                      with Android/iOS upgrades.
                    </li>
                    <li>
                      Shipped high-impact modules improving engagement and
                      feature discovery.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>
                  SDE I, <span className="purple">Buopso</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Mar 2024 – Oct 2024
                </Card.Subtitle>
                <Card.Text as="div" style={{ textAlign: "left" }}>
                  <ul style={{ paddingLeft: "1.2rem", marginBottom: 0 }}>
                    <li>
                      Launched <b>3</b> enterprise Android apps (LMS, CRM,
                      approvals).
                    </li>
                    <li>
                      Built caller identification via Broadcast Receivers for{" "}
                      <b>50K+</b> monthly calls.
                    </li>
                    <li>
                      Created a React Native component library with{" "}
                      <b>25+</b> reusable components.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>
                  Associate Software Developer,{" "}
                  <span className="purple">Chicmic</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Feb 2023 – Feb 2024
                </Card.Subtitle>
                <Card.Text as="div" style={{ textAlign: "left" }}>
                  <ul style={{ paddingLeft: "1.2rem", marginBottom: 0 }}>
                    <li>
                      Delivered <b>2</b> production apps (10K+ downloads, 4.2+
                      rating).
                    </li>
                    <li>
                      Improved reliability to <b>99.5%</b> crash-free sessions
                      with monitoring and optimizations.
                    </li>
                    <li>
                      Mentored <b>3</b> developers and resolved 30+ production
                      issues.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
