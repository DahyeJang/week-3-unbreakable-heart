import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import DetailPlan from "../components/DetailPlan";
import CommentAdd from "../components/CommentAdd";
import CommentList from "../components/CommentList";
import logo from "../img/logo.png";

const Detail = () => {
  return (
    <StBack>
      <Layout>
        <StHeader>
          <Stlogo src={logo}></Stlogo>
          <StSubject>중요한 것은 꺾이지 않는 마음</StSubject>
        </StHeader>
        <DetailPlan />
        <CommentAdd />
        <CommentList />
      </Layout>
    </StBack>
  );
};

export default Detail;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  height: 70px;
  border: 1px solid #ddd;
  padding: 0 20px;
  background-color: #1e1e1e;
`;

const StBack = styled.div`
  /* background-color: #fff9df; */
`;

const Stlogo = styled.img`
  padding-left: 50px;
  width: 35px;
`;

const StSubject = styled.span`
  @font-face {
    font-family: "yleeMortalHeartImmortalMemory";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/yleeMortalHeartImmortalMemory.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "NEXON Lv1 Gothic OTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "NEXON Lv1 Gothic OTF";
  font-size: 22px;
  font-weight: 700;
  color: white;
  padding-left: 350px;
`;
