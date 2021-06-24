import React from "react";
import styled from "styled-components";
import line from "../Img/line.png";
import Desc from "./Desc";

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  position: relative;
`;

const BG = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: -1;
`;

const LineBox = styled.div`
  width: 100%;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const Line = styled.img`
  width: 100px;
`;

const Title = styled.div`
  margin-top: 100px;
  font-family: "mainfont2";
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
`;

const Margin = styled.div`
  height: 10px;
  width: 100%;
`;

const Link = styled.a`
  cursor: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const BuyBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Buy = styled.a`
  cursor: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-family: "mainfont2";
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  padding: 15px 30px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
`;

const Info = ({ position }) => {
  return (
    <Box>
      <LineBox>
        <Line src={line}></Line>
      </LineBox>
      <Title className="dD">無花果</Title>
      <SubTitle className="dD">무화과</SubTitle>
      <Desc title={"작가"} mode={"left"} cn={"first"} position={position}>
        이준우 / 李俊雨<p></p>
        글쓰기를 좋아하는 기획자.<p></p>
        자유로운 삶을 위해 오늘도 씁니다.<p></p>
        <Margin></Margin>
        <Link href="https://www.instagram.com/jwluoe/" target="_blank">
          @jwluoe
        </Link>
        <Margin></Margin>
      </Desc>
      <Desc title={"책 소개"} cn={"second"} position={position}>
        개인적으로 페미니즘에 대해 이해하고 받아들이는 과정을 소설로 썼습니다.
        <p></p>
        결론으로만 이야기를 주고 받는 세상에서 과정에 대해 생각해보는 시간은 못
        보던 것을 보게 해주었습니다.<p></p>
        <Margin></Margin>
        미약한 첫 발자국이지만 저와 비슷한 누군가에게도 도움이 되길 바랍니다.
        <Margin></Margin>
      </Desc>
      <Desc title={"줄거리"} mode={"left"} cn={"third"} position={position}>
        자각몽을 통해 꿈속에서 삶의 이유를 찾고자 하는 주인공 후만.<p></p>
        루시드 드림 연구소의 책임자 쇼펜에게 스카웃을 받고 함께 한다.<p></p>
        그런데 연구소에서 알게된 와일드를 통해 연구소의 음모에 대해 알게
        되는데...
        <Margin></Margin>
        루시드 드리머, 후만의 여정을 그린 단편 소설
      </Desc>
      <Desc title={"서지 정보"} cn={"fourth"} position={position}>
        사이즈 : 127*188mm <p></p>
        페이지 수 : 124pg <p></p>
        <Link href="http://www.eulyoo.co.kr/member/font.html" target="_blank">
          폰트 : 을유1945
        </Link>
        <p></p>
        <Link href="https://www.instagram.com/hottssun/" target="_blank">
          디자인 : @hottsun
        </Link>
        <p></p>
        <Link href="http://junwoolee.me" target="_blank">
          웹사이트 : @junwoolee
        </Link>
      </Desc>
      <BuyBox className="dD">
        <Buy href="" target="_blank">
          무화과 책 구매
        </Buy>
      </BuyBox>
      <LineBox>
        <Line src={line}></Line>
      </LineBox>
      <BG></BG>
    </Box>
  );
};

export default Info;
