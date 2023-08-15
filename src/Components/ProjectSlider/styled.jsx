import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0%{
        top: 100%
    }
    100%{
        top: 0%;
    }
`;
export const ProjectSliderContainer = styled.div`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
  z-index: 1050;
  padding-top: 20px;
  background-color: #32323a !important;
  transition: 0.1s all;
  animation-duration: 0.1s;
  animation-name: ${animation};
  .close-icon {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    max-width: 85rem;
    margin: 0 auto;
    padding: 0 20px;
    img {
      height: 45px;
      width: 45px;
      background-color: #fff;
      transition: 0.1s all;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      :hover {
        box-shadow: 0 0 2em rgba(0, 0, 0, 0.1);
      }
    }
  }
  main {
    margin: 20px auto 24px;
    max-width: 82.5rem !important;
    img {
      border-radius: 10px;
    }
  }
  .arrow-icon {
    width: 30px;
    height: 30px;
  }
  .carousel.carousel-slider {
    overflow: visible;
  }
  .arrow-left {
    position: absolute;
    top: 45%;
    left: 20px;
    background-color: #fff;
    z-index: 1;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.1);
    cursor: pointer;
    user-select: none;
  }
  .arrow-right {
    position: absolute;
    top: 45%;
    right: 20px;
    background-color: #fff;
    z-index: 1;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.1);
    user-select: none;
  }
`;

export const CarouselImageCover = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .image-cover {
    max-width: 900px;
    max-height: 100%;
    object-fit: contain;
    margin: 40px auto 0 auto;
    padding: 0 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
