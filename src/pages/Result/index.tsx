import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import ResultBackground from "./ResultImgs/result-background.png";
import G0 from "./ResultImgs/g1.png";
import G1 from "./ResultImgs/g2.png";
import G2 from "./ResultImgs/g3.png";
import G3 from "./ResultImgs/g4.png";
import G4 from "./ResultImgs/g4.png";
import G5 from "./ResultImgs/g5.png";
import G6 from "./ResultImgs/g6.png";
import G7 from "./ResultImgs/g7.png";
import G8 from "./ResultImgs/g8.png";
import LocalStorage from "@/src/local-storage";

const Result = () => {
  const params = useParams();
  const navigate = useNavigate();

  const name = LocalStorage.get("name");

  return (
    <Container>
      <Background src={ResultBackground} />
      <ResultImgBlock>
        {Number(params.id) === 0 && <Img src={G0} />}
        {Number(params.id) === 1 && <Img src={G1} />}
        {Number(params.id) === 2 && <Img src={G2} />}
        {Number(params.id) === 3 && <Img src={G3} />}
        {Number(params.id) === 4 && <Img src={G4} />}
        {Number(params.id) === 5 && <Img src={G5} />}
        {Number(params.id) === 6 && <Img src={G6} />}
        {Number(params.id) === 7 && <Img src={G7} />}
        {Number(params.id) === 8 && <Img src={G8} />}
        <Name>
          {name} 님은
          {Number(params.id) === 0 && "프/로/갓/생/러!"}
          {Number(params.id) === 1 && "성공에 미친 갓생러!"}
          {Number(params.id) === 2 && "겸손한 갓생러!"}
          {Number(params.id) === 3 && "모범적인 갓/반/인!"}
          {Number(params.id) === 4 && "선택적 갓생러!"}
          {Number(params.id) === 5 && "아직 갓생은 어려운 갓린이!"}
          {Number(params.id) === 6 && "여유로운 걍/생/러!"}
          {Number(params.id) === 7 && "갓/생/호/소/인!"}
          {Number(params.id) === 8 && "자유로운 걍/린/이!"}
        </Name>
      </ResultImgBlock>
      <ButtonWrapper>
        <Button onClick={() => navigate("/result/all")}>
          모든 결과 유형 보기
        </Button>
        <Button
          onClick={() => {
            LocalStorage.set("name", "");
            navigate("/");
          }}
        >
          테스트 다시 하기
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Background = styled.img`
  width: 100%;
  height: 1148px;
  background-size: contain;
`;

const ResultImgBlock = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 10%;
`;

const Img = styled.img`
  width: calc(100% - 48px);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 70%;
`;

const Button = styled.div`
  width: 240px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
`;

export default Result;
