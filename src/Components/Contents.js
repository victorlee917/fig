import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  font-family: "mainfont2";
  margin-bottom: 15px;
`;

const Writer = styled.div`
  margin-bottom: 20px;
`;

const Content = styled.div`
  color: rgba(0, 0, 0, 0.6);
`;

const Contents = ({ title, writer, children }) => {
  return (
    <Box className="dD">
      <Title>{title}</Title>
      <Writer>{writer}</Writer>
      <Content>{children}</Content>
    </Box>
  );
};

export default Contents;
