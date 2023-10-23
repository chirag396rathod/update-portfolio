import styled from "styled-components";

export const ExperienceContainer = styled.div`
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  padding-top: 20px;
  width: 100%;
  .row-container {
    header {
      position: relative;
      .main-title {
        color: #fff;
        font: 600 58px Nunito;
        line-height: 1;
      }
      .fixed-label {
        position: absolute;
        top: 110px;
        left: -175px;
        transform: rotate(270deg);
        color: #fff;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -2px rgba(0, 0, 0, 0.1);
        font-weight: 500;
        @media screen and (max-width: 420px) {
          position: static;
          transform: rotate(0deg);
          margin-top: 30px;
        }
      }
      .description {
        margin-top: 35px;
        display: flex;
        justify-content: flex-start;
        color: rgba(255, 255, 255, 0.5);

        span {
          width: 90px;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.5);
          margin-top: 10px;
          margin-right: 10px;
        }
      }
    }
    .skills {
      margin-top: 50px;
      margin-bottom: 50px;
      .sub-title {
        color: #fff;
        font: 500 28px Nunito;
        margin-bottom: 20px;
      }
      .image-cover {
        svg {
          width: 60px;
          height: 60px;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            scale: 1.2;
            transition: 0.3s;
          }
        }
      }
    }
    .experience {
      margin-bottom: 50px;
      @media screen and (min-width: 767px) {
        margin-left: 30px;
      }
      .sub-title {
        color: #fff;
        font: 500 28px Nunito;
        margin-bottom: 20px;
      }
      .list {
        margin-top: 20px;
        .item {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);
          padding: 20px;
          border-radius: 8px;
          .image-cover {
            max-width: 50px;
            max-height: 50px;
            margin-right: 20px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .content {
            .job-role {
              font: 500 16px Nunito;
              color: #fff;
              span {
                font: 500 16px Nunito;
                color: rgba(255, 255, 255, 0.5);
                margin-left: 5px;
              }
            }
            .companies-name {
              font: 500 14px Nunito;
              color: rgba(255, 255, 255, 0.5);
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
`;
