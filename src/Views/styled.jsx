import styled from "styled-components";

export const HomepageStyled = styled.main`
  max-width: 72.5rem !important;
  height: calc(100vh - 130px);
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 885px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 130px;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const LeftSideStyled = styled.div`
  @media (max-width: 885px) {
    margin-bottom: 20px;
    margin-top: 330px;
    margin-left: 20px;
    margin-right: 20px;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
  .image-bg {
    max-width: 325px;
    max-height: 610px;

    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
  .links {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    .icon-cover {
      cursor: pointer;
      margin-right: 20px;
      img {
        width: 30px;
        height: 30px;
        object-fit: contain;
        &:hover {
          scale: 1.2;
        }
      }
    }
  }
`;
export const RightSideStyled = styled.div`
  padding: 0 20px;
  flex: 1;
  max-height: calc(100vh - 130px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  @media (max-width: 885px) {
    overflow: visible;
    max-height: 100%;
  }
  .desc {
    color: #fff;
    font: 500 20px "Nunito";
    line-height: 1.5;
    margin: 20px 0;
    text-align: justify;
    @media screen and (max-width: 440px) {
      font-size: 14px;
    }
    p {
      margin-top: 10px;
    }
  }
  header {
    background-color: #fff;
    color: #32323a;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.15);

    font: 600 35px "Nunito";
    @media screen and (max-width: 440px) {
      font-size: 18px;
    }
    span {
      background-color: #e98b2c;
      font-weight: bold;
      padding: 0 10px;
      border-radius: 8px;
      color: #fff;
    }
  }
`;

export const CommonLayout = styled.div`
  margin-top: 90px;
`;
