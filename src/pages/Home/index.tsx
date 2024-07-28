import React from "react";
import MainBackground from "@/src/assets/main-background.png";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Background src={MainBackground} />
    </>
  );
};

const Background = styled.img`
  width: 100%;
  height: 100vh;
`;

export default Home;
