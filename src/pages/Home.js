import React, { useEffect } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getPlans } from "../redux/modules/plansSlicer";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, plans } = useSelector((state) => state.plans);

  useEffect(() => {
    dispatch(__getPlans());
  }, [dispatch]);
  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  const onSubmitH = () => {
    navigate("/write");
  };
  return (
    <div>
      <Layout>
        <Header></Header>
        <MainForm
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitH();
          }}
        >
          <MarqueeW>
            <Marquee gradientWidth={0}>
              <h3>2023년, 꺾이지 않는 계획을 세워보세요! </h3>
            </Marquee>
          </MarqueeW>
          <CustomButton css="mode1" value="글쓰기"></CustomButton>
        </MainForm>
        <Test>
          {plans.map((plan) => (
            <StBox key={plan.id}>
              <StLink to={`/detail/${plan.id}`}>
                <StDetail>상세보기</StDetail>
              </StLink>
              <BoxH2>{plan.title}</BoxH2>
              <BoxP>{plan.name}</BoxP>
            </StBox>
          ))}
          ;
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

const StDetail = styled.div`
  margin-top: 20px;
  text-align: center;
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

const StLink = styled(Link)`
  text-decoration: none;
`;

const BoxP = styled.p`
  display: flex;
  justify-content: end;
  margin: 20px;
`;
