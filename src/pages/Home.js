import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <MainForm>
          <MarqueeW>
            <Marquee gradientWidth={0}>
              <h3>2023년, 꺾이지 않는 계획을 세워보세요! </h3>
            </Marquee>
          </MarqueeW>
          {/* <CustomButton>글쓰기</CustomButton> */}
        </MainForm>
        <Test>
          <StBox>
            <BoxH2>타이틀</BoxH2>
            <BoxP>작성자</BoxP>
          </StBox>
          <StBox>
            <BoxH2>타이틀</BoxH2>
            <BoxP>작성자</BoxP>
          </StBox>
          <StBox>
            <BoxH2>타이틀</BoxH2>
            <BoxP>작성자</BoxP>
          </StBox>
          <StBox>
            <BoxH2>타이틀</BoxH2>
            <BoxP>작성자</BoxP>
          </StBox>
          <StBox>
            <BoxH2>타이틀</BoxH2>
            <BoxP>작성자</BoxP>
          </StBox>
          <StBox>
            <BoxH2>타이틀</BoxH2>
            <BoxP>작성자</BoxP>
          </StBox>
        </Test>
      </div>
    </div>
  );
};

export default Home;

// const AllBackGroundColor = styled.div`
//   max-width: 100%;
//   max-height: 100vh;
//   background-color: #fffbe6;
// `;

const MainForm = styled.form`
  width: 80%;
  margin: 30px auto 0;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
`;

const Test = styled.div`
  margin: 30px auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  gap: 45px;
`;

const MarqueeW = styled.div`
  width: 60%;
`;

const StBox = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 20px;
`;

const BoxH2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

const BoxP = styled.p`
  display: flex;
  justify-content: end;
  margin: 20px;
`;
