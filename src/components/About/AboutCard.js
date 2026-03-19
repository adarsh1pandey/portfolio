import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adarsh Pandey</span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            I am a <span className="purple">Software Development Engineer I</span>{" "}
            at <b>CARS24</b>, building and scaling cross-platform experiences with{" "}
            <span className="purple">React Native</span>.
            <br />I previously worked at <b>Buopso</b> and <b>Chicmic Technologies</b>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't Settle"{" "}
          </p>
          <footer className="blockquote-footer">Adarsh Pandey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
