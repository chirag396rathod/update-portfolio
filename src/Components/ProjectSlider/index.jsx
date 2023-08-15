import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ProjectData } from "../../Views/Projects/mockdata";
import { CarouselImageCover, ProjectSliderContainer } from "./styled";
import LeftArrow from "../../assets/Images/Home/RightIcon.png";
import RightArrow from "../../assets/Images/Home/LeftIcon.png";
import CloseIcon from "../../assets/Images/Home/CloseIcon.png";

const ProjectSlider = ({ data, handleClose }) => {
  const RenderLeftArrow = (clickHandler, hasPrev) => {
    return (
      <img src={LeftArrow} className="arrow-icon" onClick={clickHandler}></img>
    );
  };
  const RenderRightArrow = ({ clickHandler, hasPrev }) => {
    return (
      <img src={RightArrow} className="arrow-icon" onClick={clickHandler}></img>
    );
  };

  return (
    <ProjectSliderContainer>
      <div className="close-icon">
        <img src={CloseIcon} alt="CloseIcon" onClick={() => handleClose()} />
      </div>
      <main>
        <CarouselImageCover>
          <Carousel
            infiniteLoop
            showIndicators={false}
            emulateTouch={false}
            showThumbs={false}
            swipeable
            showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div className={`arrow-left`} onClick={clickHandler}>
                  <RenderRightArrow />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div className={`arrow-right`} onClick={clickHandler}>
                  <RenderLeftArrow />
                </div>
              );
            }}
          >
            {data.images.map((item, index) => (
              <div key={index} className="image-cover">
                <img src={item && item} alt={item && index} />
              </div>
            ))}
          </Carousel>
        </CarouselImageCover>
      </main>
    </ProjectSliderContainer>
  );
};

export default ProjectSlider;
