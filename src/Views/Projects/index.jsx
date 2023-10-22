import { useState } from "react";
import ProjectSingleCard from "../../Components/ProjectSingleCard";
import { CommonLayout } from "../styled";
import { ProjectData } from "./mockdata";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import ProjectSlider from "../../Components/ProjectSlider";

const PortfolioStyled = styled.div`
  max-width: 82.5rem !important;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 0 20px;
`;

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});

  const handleIsOpen = (item) => {
    setIsOpen(true);
    if (item) {
      setSelectedVideo(item);
    }
  };

  return (
    <CommonLayout>
      <PortfolioStyled>
        <Row className="g-4">
          {ProjectData.map((item, key) => (
            <Col md={6} lg={4} key={key} onClick={() => handleIsOpen(item)}>
              <ProjectSingleCard data={item} />
            </Col>
          ))}
        </Row>
        {isOpen && (
          <ProjectSlider
            data={selectedVideo}
            handleClose={() => setIsOpen(false)}
          />
        )}
      </PortfolioStyled>
    </CommonLayout>
  );
};

export default Projects;
