import React from "react";
import { ExperienceContainer } from "./styled";
import { Col, Row } from "reactstrap";
import {
  ANTD_SVG_ICON,
  BOOTSTREP_SVG_ICON,
  CSS_SVG_ICON,
  HTML_SVG_ICON,
  JAVASCRIPT_SVG_ICON,
  MONGODB_SVG_ICON,
  NODE_JS_SVG_ICON,
  REACT_SVG_ICON,
  REDUX_SVG_ICON,
} from "../../Components/TechSvgIcons";
import OfficeIcon from "../../assets/Images/office-svg-icon.svg";

const Experience = () => {
  return (
    <ExperienceContainer className="container">
      <Row className="row-container ">
        <Col md={5} lg={5} sm={12}>
          <header>
            <div className="main-title">
              Skills & <br /> Experience
            </div>
            <div className="description">
              <span></span> 🦋 A specialist in React development ✨A passion of
              mine is designing & developing scalable applications and solving
              problems through user experience, 🙂 primarily on modern web UI
              and development.
            </div>
            <div className="fixed-label">1.7+ Years Experienced Developer</div>
          </header>
          <div className="skills">
            <div className="sub-title">Professional Skills</div>
            <Row className="g-4">
              <Col className="col-2 col-lg-3 col-md-3 col-sm-3">
                <div className="image-cover">{HTML_SVG_ICON}</div>
              </Col>
              <Col className="col-2 col-lg-3 col-md-3 col-sm-3">
                <div className="image-cover">{CSS_SVG_ICON}</div>
              </Col>
              <Col className="col-2 col-lg-3 col-md-3 col-sm-3">
                <div className="image-cover">{JAVASCRIPT_SVG_ICON}</div>
              </Col>
              <Col className="col-2 col-lg-3 col-md-3 col-sm-3">
                <div className="image-cover">{REACT_SVG_ICON}</div>
              </Col>
              <Col className="col-2 col-lg-3 col-md-3 col-sm-3">
                <div className="image-cover">{REDUX_SVG_ICON}</div>
              </Col>
              <Col className="col-2 col-lg-3 col-md-3 col-sm-3">
                <div className="image-cover">{NODE_JS_SVG_ICON}</div>
              </Col>
              <Col className="col-2 col-lg-3 col-md-3 col-sm-3">
                <div className="image-cover">{MONGODB_SVG_ICON}</div>
              </Col>
              <Col className="col-2 col-lg-3 col-md-3 col-sm-3">
                <div className="image-cover">{BOOTSTREP_SVG_ICON}</div>
              </Col>
              <Col className="col-2 col-lg-3 col-md-3 col-sm-3">
                <div className="image-cover">{ANTD_SVG_ICON}</div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <div className="experience">
            <div className="sub-title">Experience</div>
            <div className="list">
              <div className="item">
                <div className="image-cover">
                  <img src={OfficeIcon} />
                </div>
                <div className="content">
                  <div className="job-role">
                    ReactJs Developer <span>(April-2022 - Present)</span>{" "}
                  </div>
                  <div className="companies-name">Atologist Infotech</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </ExperienceContainer>
  );
};

export default Experience;
