import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const Round = styled.div`
  position: fixed;
  width: 15px;
  height: 15px;
  border-radius: 50px;
  mix-blend-mode: difference;
  background-color: white;
  display: flex;
  justify-content: center;
  pointer-events: none;
  align-items: center;
  z-index: 2000;
`;

const useCursor = () => {
  const cursor = useRef();
  const setPosition = (e) => {
    if (cursor.current) {
      cursor.current.style.top = e.y - cursor.current.offsetHeight / 2 + "px";
      cursor.current.style.left = e.x - cursor.current.offsetWidth / 2 + "px";
    } else {
      return;
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => {
      window.removeEventListener("mousemove", setPosition);
    };
  }, []);
  return cursor;
};

const Cursor = () => {
  const cursor = useCursor();
  return isMobile ? "" : <Round ref={cursor}></Round>;
};

export default Cursor;
