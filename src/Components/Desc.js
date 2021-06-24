import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import line from "../Img/line.png";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.mode ? "flex-start" : "flex-end")};
  text-align: ${(props) => (props.mode ? "left" : "right")};
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  transition: 0.1s ease-in-out;
`;

const Title = styled.div`
  font-size: 14px;
  margin-right: 5px;
  margin-left: 5px;
  font-family: "mainfont2";
`;

const Line = styled.img`
  margin-top: 10px;
  width: 80px;
`;

const Contents = styled.div`
  margin-top: 10px;
  line-height: 2;
  color: rgba(255, 255, 255, 0.6);
`;
const Desc = ({ title, children, mode, cn, position }) => {
  const [yvalue, setYvalue] = useState(null);
  useEffect(() => {
    const item = document.querySelector(`.${cn}`);
    const itemY = item.getBoundingClientRect().top + window.pageYOffset;
    setYvalue(itemY);
  }, [yvalue]);
  return (
    <Box
      mode={mode}
      className="dD"
      position={position}
      className={cn}
      style={{
        opacity: `${(position - yvalue) / 300}`,
      }}
    >
      <Title>{title}</Title>
      <Line src={line}></Line>
      <Contents>{children}</Contents>
    </Box>
  );
};

export default Desc;
