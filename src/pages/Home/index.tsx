import React, { useEffect, useState } from "react";
import MainBackground from "@/src/assets/main-background.png";
import styled from "styled-components";
import { getCount } from "@/src/api/counter";
import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCount().then((res: any) => {
      console.log("res", res);
      setCount(res.count);
    });
  }, []);

  console.log("name", name);

  const onNavigate = () => {
    if (name === "") {
      return toast("이름을 입력해주세요");
    }
    navigate("/questions");
  };

  return (
    <>
      <Background src={MainBackground} />
      <Block>
        <Name
          placeholder="이름 입력하기"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StartButton onClick={onNavigate}>시작하기</StartButton>

        <Participants>
          참여자 수<Count>{Number(count).toLocaleString()}</Count>
        </Participants>
        <Line></Line>
        <ShareBlock>
          공유하기
          <IconWrapper></IconWrapper>
        </ShareBlock>
      </Block>
    </>
  );
};

const Background = styled.img`
  width: 100%;
  height: 100vh;
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 10%;
`;

const Name = styled.input`
  width: 240px;
  height: 50px;
  text-align: center;
  border: 2px solid #000;
  border-radius: 8px;
  background: #fff;
`;

const StartButton = styled.div`
  width: 275px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #fff;
  border-radius: 8px;
  background: #000;
  font-size: 20px;
  cursor: pointer;
  margin-top: 12px;
`;

const Participants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 50px;
`;

const Count = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const Line = styled.div`
  width: calc(100% - 32px);
  height: 2px;
  background: #fff;
  margin: 30px 0;
`;

const ShareBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 18px;
  font-weight: 500;
`;

const IconWrapper = styled.div``;

export default Home;
