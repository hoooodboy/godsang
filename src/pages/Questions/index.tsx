import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import Q1 from "./QuestionImgs/q1.png";
import Q2 from "./QuestionImgs/q2.png";
import Q3 from "./QuestionImgs/q3.png";
import Q4 from "./QuestionImgs/q4.png";
import Q5 from "./QuestionImgs/q5.png";
import Q6 from "./QuestionImgs/q6.png";
import Q7 from "./QuestionImgs/q7.png";
import Q8 from "./QuestionImgs/q8.png";

const QUESTION_LIST = [
  {
    img: Q1,
    options: [
      {
        option:
          "이동 시간은 온전한 내 시간!\n책을 보거나 자투리 시간으로 이용한다",
        value: "G",
      },
      {
        option: "드디어 편하게 폰 좀 하려나?\n밀린 웹툰을 보거나 잠을 잔다",
        value: "M",
      },
    ],
  },
  {
    img: Q2,
    options: [
      {
        option:
          "2시간 전에 일어나서 씻고… 이동 1시간에…\n미리 시간을 계산해 자는 시간을 조정한다",
        value: "G",
      },
      {
        option:
          "아 맞다 일정! 자야하는데 폰하다 보니\n벌써 새벽 3시?! 하… 4시간 밖에 못 자네 ㅠㅠ",
        value: "M",
      },
    ],
  },
  {
    img: Q3,
    options: [
      {
        option: "많은 일정을 모두 기억하지 않아도 돼서\n마음이 편안해지는 일",
        value: "G",
      },
      {
        option: "매우 부담되고 귀찮은 일이어서\n자꾸 미루고 안 하게 되는 일",
        value: "M",
      },
    ],
  },
  {
    img: Q4,
    options: [
      { option: "이미 신청해서 가는 중!\n너무너무 기대된다", value: "G" },
      {
        option: "내 관심 분야 행사네?!\n이런 것도 있었구나~ 몰랐넹 ㅎㅎ…",
        value: "M",
      },
    ],
  },
  {
    img: Q5,
    options: [
      {
        option: "이른 아침에나 일어나\n깨어있는 시간을 늘리려고 하는 편",
        value: "G",
      },
      {
        option:
          "일어나니까 오후?!\n졸릴 때 자고 눈 떠지는 대로 일어나는 게 좋아",
        value: "M",
      },
    ],
  },
  {
    img: Q6,
    options: [
      {
        option:
          "지금 답장하지 않아도 되네?\n방해금지모드를 켜고 하던 일에 집중한다",
        value: "G",
      },
      {
        option:
          "바로 답장을 하고 다른 알림도 확인하다보니\n벌써 1시간 째 폰 중,,",
        value: "M",
      },
    ],
  },
  {
    img: Q7,
    options: [
      {
        option:
          "나도 저렇게 할 수 있어! 자극을 받아\n나도 더 좋은 결과를 내도록 할일을 계획한다",
        value: "G",
      },
      {
        option:
          "우와~ 멋지다.. 나도 한 번 해볼까?\n아니당 귀찮아… 막상 몸이 움직이지 않는다",
        value: "M",
      },
    ],
  },
  {
    img: Q8,
    options: [
      {
        option:
          "일정을 확인하니 가능! 나를 성장시킬 수\n있는 기회인데 안 할 이유가 없지~",
        value: "G",
      },
      {
        option: "아… 좋은 경험이긴 하지만 조금 귀찮네\n아직은 아니야… 거절하자",
        value: "M",
      },
    ],
  },
];

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const navigate = useNavigate();

  const handleOptionClick = (value) => {
    setResponses([...responses, value]);
    if (currentQuestionIndex < QUESTION_LIST.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit([...responses, value]);
    }
  };

  const handleSubmit = (finalResponses) => {
    const countG = finalResponses.filter((value) => value === "G").length;
    navigate(`/result/${countG}`);
  };

  const progress = ((currentQuestionIndex + 1) / QUESTION_LIST.length) * 100;

  return (
    <Container>
      <ProgressBar style={{ width: "100%", backgroundColor: "#e0e0e0" }}>
        <Progress
          style={{
            width: `${progress}%`,
          }}
        />
      </ProgressBar>
      <Img src={QUESTION_LIST[currentQuestionIndex].img} alt="question" />
      <QuestionBlock>
        {QUESTION_LIST[currentQuestionIndex].options.map((opt, index) => (
          <Button key={index} onClick={() => handleOptionClick(opt.value)}>
            {opt.option}
          </Button>
        ))}
      </QuestionBlock>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  min-height: 800px;
`;

const Img = styled.img`
  width: 100%;
  background-size: contain;
  /* height: 100vh; */
`;

const QuestionBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  position: absolute;
  top: 465px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #e6e6e6;
  position: absolute;
  top: 50px;
`;

const Progress = styled.div<{ progress?: number }>`
  width: ${(p) => p.progress};
  height: 100%;
  background: #000;
  position: absolute;
  left: 0;
`;

const Button = styled.div`
  width: 275px;
  height: 70px;
  border-radius: 35px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  white-space: pre-wrap;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 5%;

  cursor: pointer;
`;

export default Questions;
