import React from "react";
import styled from "styled-components";

const ProjectSingleCardStyled = styled.div`
  width: 100%;
  height: 100%;
  .project-image {
    width: 100%;
    height: 300px;
    background-color: rgba(233, 139, 44, 0.1);
    border-radius: 20px;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.15);
    cursor: pointer;
    padding: 20px;
    img {
      overflow: hidden;
      border-radius: 20px;
      width: 100%;
      height: 100%;
    }
  }
  .title {
    margin: 20px 0;
    color: #e98b2c;
    font: bold 22px "Nunito";
  }
  .desc {
    color: rgba(233, 139, 44, 0.7);
    font: 500 16px "Nunito";
  }
  transition: all 0.1s;
  cursor: default;
  :hover {
    .title {
      color: #fff;
    }
    .desc {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const ProjectSingleCard = ({ className, data }) => {
  return (
    <ProjectSingleCardStyled className={className || ""}>
      <div className="project-image">
        <img src={data && data.images[0]} alt="image" />
      </div>
      <div className="title">{data && data.title}</div>
      <div className="desc">{data && data.desc.substring(0, 100) + "..."}</div>
    </ProjectSingleCardStyled>
  );
};

export default ProjectSingleCard;
