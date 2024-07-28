import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import G0 from "./ResultImgs/g1.png";
import G1 from "./ResultImgs/g2.png";
import G2 from "./ResultImgs/g3.png";
import G3 from "./ResultImgs/g4.png";
import G4 from "./ResultImgs/g4.png";
import G5 from "./ResultImgs/g5.png";
import G6 from "./ResultImgs/g6.png";
import G7 from "./ResultImgs/g7.png";
import G8 from "./ResultImgs/g8.png";

const Result = () => {
  const params = useParams();

  return (
    <Container>
      {Number(params.id) === 0 && <Img src={G0} />}
      {Number(params.id) === 1 && <Img src={G1} />}
      {Number(params.id) === 2 && <Img src={G2} />}
      {Number(params.id) === 3 && <Img src={G3} />}
      {Number(params.id) === 4 && <Img src={G4} />}
      {Number(params.id) === 5 && <Img src={G5} />}
      {Number(params.id) === 6 && <Img src={G6} />}
      {Number(params.id) === 7 && <Img src={G7} />}
      {Number(params.id) === 8 && <Img src={G8} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Img = styled.img`
  width: 100%;
  background-size: contain;
`;

export default Result;
