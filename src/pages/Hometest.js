import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Home = () => {
  const [plans, setPlans] = useState([]);

  const fetchPlans = async () => {
    const { data } = await axios.get("http://localhost:3001/plans");
    setPlans(data);
  };

  useEffect(() => {
    fetchPlans();
  }, [setPlans]);

  // console.log("plans", plans);

  // const aaa = plans.map((plan) => {
  //   return console.log(plan.name);
  // });

  return (
    <div>
      <Layout>
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
          {plans.map((plan) => {
            console.log(plan);
            return (
              <StBox key={plan.id}>
                <BoxH2>{plan.title}</BoxH2>
                <BoxP>{plan.name}</BoxP>
              </StBox>
            );
          })}
        </Test>
      </Layout>
    </div>
  );
};

export default Home;

const MainForm = styled.form`
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
  width: 80%;
  gap: 45px;
`;

const MarqueeW = styled.div`
  width: 60%;
`;

const StBox = styled.div`
  width: 30%;
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
