import React from "react";
import styled from "styled-components";
import circles from "../Img/circles.png";

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 50px;
  font-family: "mainfont2";
  font-size: 36px;
`;

const ImgBox = styled.div`
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ImgContents = styled.img`
  height: 100%;
`;

const Cover = () => {
  return (
    <Box>
      <Top>
        <Title className="dD">無花果</Title>
      </Top>
      <ImgBox>
        <ImgContents src={circles}></ImgContents>
      </ImgBox>
    </Box>
  );
};

export default Cover;
