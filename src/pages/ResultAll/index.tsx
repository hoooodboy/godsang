import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ResultBackground from "./ResultImgs/result-background.png";
import ResultAllBackground from "./ResultImgs/result-all-background.png";
import G0 from "./ResultImgs/g0.png";
import G1 from "./ResultImgs/g1.png";
import G2 from "./ResultImgs/g2.png";
import G3 from "./ResultImgs/g3.png";
import G4 from "./ResultImgs/g4.png";
import G5 from "./ResultImgs/g5.png";
import G6 from "./ResultImgs/g6.png";
import G7 from "./ResultImgs/g7.png";
import G8 from "./ResultImgs/g8.png";
import LocalStorage from "@/src/local-storage";

const ResultAll = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Background src={ResultAllBackground} />
      <ResultImgBlock>
        <ResultImgWrapper>
          <Img src={G0} />
        </ResultImgWrapper>
        <ResultImgWrapper>
          <Img src={G1} />
        </ResultImgWrapper>
        <ResultImgWrapper>
          <Img src={G2} />
        </ResultImgWrapper>
        <ResultImgWrapper>
          <Img src={G3} />
        </ResultImgWrapper>
        <ResultImgWrapper>
          <Img src={G4} />
        </ResultImgWrapper>
        <ResultImgWrapper>
          <Img src={G5} />
        </ResultImgWrapper>
        <ResultImgWrapper>
          <Img src={G6} />
        </ResultImgWrapper>
        <ResultImgWrapper>
          <Img src={G7} />
        </ResultImgWrapper>
        <ResultImgWrapper>
          <Img src={G8} />
        </ResultImgWrapper>
      </ResultImgBlock>
      <ButtonWrapper>
        <Button onClick={() => navigate(-1)}>내 결과로 돌아가기</Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Background = styled.img`
  width: 100%;
  background-size: contain;
  position: absolute;
  top: 0;
`;

const ResultImgBlock = styled.div`
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 110px;
  margin: 0 auto;
  gap: 40px;
  padding-bottom: 110px;
`;

const ResultImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  background-size: contain;
`;

const Name = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 390px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 100;
  position: fixed;
  bottom: 0;
`;

const Button = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;
  border-radius: 32px 32px 0px 0px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: pointer;
`;

export default ResultAll;
