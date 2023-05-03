import ProjectSingleCard from "../../Components/ProjectSingleCard";
import { CommonLayout } from "../styled";
import { ProjectData } from "./mockdata";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const PortfolioStyled = styled.div`
  max-width: 82.5rem !important;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 0 20px;
`;

const Projects = () => {
  return (
    <CommonLayout>
      <PortfolioStyled>
        <Row className="g-5">
          {ProjectData.map((item, key) => (
            <Col md={6} lg={4} key={key}>
              <ProjectSingleCard data={item} />
            </Col>
          ))}
        </Row>
      </PortfolioStyled>
    </CommonLayout>
  );
};

export default Projects;
