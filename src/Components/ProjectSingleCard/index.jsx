import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ShareIcon from "../../assets/Images/share-svg-icon.svg";
import { useNavigate } from "react-router";

const ProjectSingleCardStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);

  .project-image {
    width: 100%;
    height: 280px;
    cursor: pointer;
    overflow: hidden;
    padding: 20px 20px 0px 20px;
    span {
      height: 100%;
    }
    img {
      overflow: hidden;
      border-radius: 20px 20px 0px 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: all 0.1s;
    }
  }
  .content {
    padding: 0 20px 50px 20px;
    .tech-steck {
      .image-cover {
        svg {
          width: 32px;
          height: 32px;
          transition: all 0.1s;
          &:hover {
            scale: 1.2;
          }
        }
      }
    }
  }
  .title {
    margin: 20px 0px 10px 0;
    color: #fff;
    font: bold 22px "Nunito";
  }
  .desc {
    color: #9ca3af;
    font: 500 16px "Nunito";
  }
  transition: all 0.1s;
  cursor: default;
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 20px;
    svg {
      width: 24px;
      height: 24px;
      cursor: pointer;
      margin-left: 20px;
      transition: all 0.1s;
      cursor: pointer;
      &:hover {
        scale: 1.2;
      }
    }
  }
`;

const ProjectSingleCard = ({ className, data }) => {
  const handleRedorect = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <ProjectSingleCardStyled className={className || ""}>
      <div className="project-image">
        <LazyLoadImage src={data && data.images[0]} effect="blur" />
      </div>
      <div className="content">
        <div className="title">{data && data.title}</div>
        <div className="desc">
          {data && data.desc.substring(0, 120) + "..."}
        </div>
        <div className="tech-steck row">
          {data &&
            data.tech.map((item) => (
              <div className="image-cover col-2 gy-3 ">{item}</div>
            ))}
        </div>
        <div className="footer">
          <svg
            fill="#fff"
            height="70px"
            width="70px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xml:space="preserve"
          >
            <g id="social-github">
              <path
                d="M22.4,6c-1.1-1.8-2.5-3.3-4.4-4.4C16.2,0.5,14.2,0,12,0C9.8,0,7.8,0.5,6,1.6C4.1,2.7,2.7,4.1,1.6,6C0.5,7.8,0,9.8,0,12
		c0,2.6,0.8,5,2.3,7.1c1.5,2.1,3.5,3.5,5.9,4.3c0.3,0.1,0.5,0,0.6-0.1C9,23.2,9,23,9,22.8c0,0,0-0.3,0-0.8c0-0.5,0-1,0-1.4l-0.4,0.1
		c-0.2,0-0.5,0.1-0.9,0.1c-0.3,0-0.7,0-1.1-0.1c-0.4-0.1-0.7-0.2-1-0.5c-0.3-0.2-0.6-0.6-0.7-1l-0.2-0.4c-0.1-0.2-0.3-0.5-0.5-0.8
		c-0.2-0.3-0.5-0.5-0.7-0.6l-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.1,0.1-0.2c0.1,0,0.2-0.1,0.5-0.1
		l0.3,0c0.2,0,0.5,0.2,0.8,0.4c0.3,0.2,0.6,0.5,0.8,0.8c0.2,0.4,0.5,0.8,0.9,1c0.3,0.2,0.7,0.3,1,0.3c0.3,0,0.6,0,0.9-0.1
		C8.6,19.1,8.8,19,9,18.9c0.1-0.7,0.3-1.2,0.8-1.6c-0.6-0.1-1.1-0.2-1.6-0.3c-0.5-0.1-1-0.3-1.5-0.6c-0.5-0.3-0.9-0.6-1.3-1
		c-0.3-0.4-0.6-1-0.8-1.6c-0.2-0.7-0.3-1.5-0.3-2.3c0-1.3,0.4-2.3,1.2-3.2C5.2,7.2,5.2,6.1,5.7,5C6,4.9,6.4,4.9,7,5.2
		c0.6,0.2,1,0.4,1.3,0.6C8.6,5.9,8.8,6.1,9,6.2c1-0.3,2-0.4,3-0.4s2,0.1,3,0.4l0.6-0.4C16,5.6,16.5,5.3,17,5.1
		c0.6-0.2,1-0.3,1.3-0.2c0.5,1.2,0.5,2.2,0.1,3.2c0.8,0.9,1.2,2,1.2,3.2c0,0.9-0.1,1.7-0.3,2.4c-0.2,0.7-0.5,1.2-0.8,1.6
		c-0.3,0.4-0.8,0.8-1.3,1c-0.5,0.3-1,0.5-1.5,0.6c-0.5,0.1-1,0.2-1.6,0.3c0.5,0.5,0.8,1.2,0.8,2.2v3.3c0,0.2,0.1,0.3,0.2,0.5
		c0.1,0.1,0.3,0.2,0.6,0.1c2.4-0.8,4.4-2.2,5.9-4.3C23.2,17,24,14.6,24,12C24,9.8,23.5,7.8,22.4,6z"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="text-2xl iconify iconify--iconoir"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            onClick={(e) => handleRedorect(e, data.url || "")}
          >
            <g
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="1.5"
            >
              <path stroke-linejoin="round" d="M21 3h-6m6 0l-9 9m9-9v6"></path>
              <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
            </g>
          </svg>
        </div>
      </div>
    </ProjectSingleCardStyled>
  );
};

export default ProjectSingleCard;
