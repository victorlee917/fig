import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Container from "../Components/Container";
import Cover from "../Components/Cover";
import Info from "../Components/Info";
import Mockup from "../Components/Mockup";
import Review from "../Components/Review";
import Cursor from "../Components/Cursor";

const Main = () => {
  const [position, setPosition] = useState(0);
  const onScroll = () => {
    setPosition(window.pageYOffset + window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <Helmet title="無花果 | 무화과"></Helmet>
      <Container>
        <Cover></Cover>
        <Info position={position}></Info>
        <Mockup></Mockup>
        <Review></Review>
      </Container>
      <Cursor></Cursor>
    </>
  );
};

export default Main;
