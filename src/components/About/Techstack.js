import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1, 
  DiReact, 
  DiGit, 
  DiJava 
} from "react-icons/di";
import { 
  SiFirebase, 
  SiNextdotjs,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiMaterialUi 
} from "react-icons/si";
import { 
  RiHtml5Fill  
} from "react-icons/ri";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <RiHtml5Fill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
