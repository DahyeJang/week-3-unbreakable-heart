import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getPlans } from "../redux/modules/plansSlicer";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import useED from "../components/hooks/useED";

const Home = () => {
  const navigate = useNavigate();
  // const aaa = useSelector((state) => state);
  const { isLoading, error, plans } = useSelector((state) => state.plans);
  useED(__getPlans);
  // useEffect(() => { 위에 커스텀 훅과 같은 기능
  //   dispatch(__getPlans());
  // }, [dispatch]);
  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  const onSubmitH = () => {
    navigate("/write");
  };

  const buttonCss =
    "background-color: #ff5f00; width: 140px; height: 40px;border-radius: 20px; border: none; color: black; font-weight: 700; font-size: 15px;";

  return (
    <div>
      <Layout>
        <Header />
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
          <CustomButton css={buttonCss} value="글쓰기"></CustomButton>
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
  margin: 40px auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
`;

const MarqueeW = styled.div`
  width: 60%;
`;

const StDetail = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const StBox = styled.div`
  width: 22%;
  height: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 20px;
  border: 2px solid #064f00;
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
