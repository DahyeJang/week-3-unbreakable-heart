import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import DetailPlan from "../components/DetailPlan";
import CommentAdd from "../components/CommentAdd";
import CommentList from "../components/CommentList";
import Header from "../components/Header";

const Detail = () => {
  return (
    <StBack>
      <Layout>
        <Header />
        <DetailPlan />
        <CommentAdd />
        <CommentList />
      </Layout>
    </StBack>
  );
};

export default Detail;

const StBack = styled.div`
  /* background-color: #fff9df; */
`;
