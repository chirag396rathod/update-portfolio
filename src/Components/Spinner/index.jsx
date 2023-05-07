import React from "react";
import styled from "styled-components";
import { Spinner } from "reactstrap";

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <SpinnerContainer>
      <Spinner color="primary" />
    </SpinnerContainer>
  );
};

export default Loader;
