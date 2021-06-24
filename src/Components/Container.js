import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position: relative;
  /* height: ${(props) => (props.mode ? "100vh" : "")}; */
`;

const SmallBox = styled.div`
  max-width: 600px;
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const Container = ({ children, mode }) => {
  return (
    <Box mode={mode}>
      <SmallBox>{children}</SmallBox>
    </Box>
  );
};

export default Container;
