import React from "react";
import styled from "styled-components";
import mockup from "../Img/mockup.png";

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  position: relative;
`;

const MockupBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MockupImg = styled.img`
  width: 100vw;
`;

const Mockup = () => {
  return (
    <Box>
      <MockupBox>
        <MockupImg src={mockup}></MockupImg>
      </MockupBox>
    </Box>
  );
};

export default Mockup;
