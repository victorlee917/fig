import React from "react";
import styled from "styled-components";
import Contents from "./Contents";
import ReviewList from "../ReviewList";

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Top = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: "mainfont2";
  font-size: 18px;
`;

const Comments = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 2;
  color: rgba(0, 0, 0, 0.6);
`;

const Link = styled.a`
  cursor: none;
  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

const Review = () => {
  return (
    <Box className="dD">
      <Top>
        <Title className="dD">서평</Title>
      </Top>
      {ReviewList.map((value, index) => {
        return (
          <Contents title={value.title} writer={value.writer} key={index}>
            value.contents
          </Contents>
        );
      })}

      <Comments>
        인스타그램 DM으로 남겨주신 서평은 이곳에 올려드립니다.<p></p>
        <Link href="https://www.instagram.com/jwluoe/" target="_blank">
          @jwluoe
        </Link>
        <p></p>
      </Comments>
    </Box>
  );
};

export default Review;
