import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Myself </span> !
            </h1>
            <p className="home-about-body">
              I’m a mobile-focused software engineer building high-quality{" "}
              <b className="purple">React Native</b> products with a strong focus
              on performance, animations, and reliability.
              <br />
              <br />
              I have worked across <b className="purple">React Native</b>,{" "}
              <b className="purple">React.js</b>, Android, APIs, Git/GitHub,
              Firebase, and modern app release workflows.
              <br />
              <br />I know
              <i>
                <b className="purple"> C++, JavaScript/TypeScript and Python </b>{" "}
                as languages.
              </i>
              <br />
              <br />
              My main interests are building &nbsp;
              <i>
                <b className="purple">React Native applications</b> and{" "}
                <b className="purple">
                  scalable consumer products.
                </b>
              </i>
              <br />
              <br />
              I enjoy working end-to-end: architecture, reusable components,
              deep linking, performance tuning, and shipping polished UX.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adarsh1pandey"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/adrshpy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adarshpy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/adarshpy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
