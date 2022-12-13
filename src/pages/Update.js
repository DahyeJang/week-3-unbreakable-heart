import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getPlans, __patchPlans } from "../redux/modules/plansSlicer";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    dispatch(__getPlans());
  }, [dispatch]);
  const { plans } = useSelector((state) => state.plans);
  const total = plans.find((plan) => plan.id === params.id);
  const [postUp, setPostUp] = useState({
    id: total.id,
    name: "",
    title: "",
    body: "",
  });

  const onClickUpdateH = () => {
    dispatch(__patchPlans(postUp));
    navigate(`/detail/${total.id}`);
  };
  console.log(total);
  const buttonCss =
    "font-size: 18px; width : 20%; height : fit-content;  border : none; margin : 20px   auto;" +
    "background: black; color : orange; border-radius :20px;";
  return (
    <Layout>
      <Header />
      <ContentBox>
        <ContentLiner>
          <div>
            <div className="CL_label">작성자 : </div>
            <input
              type="text"
              className="CL_content"
              onChange={(e) => {
                setPostUp({
                  ...postUp,
                  name: e.target.value,
                });
              }}
            ></input>
          </div>
        </ContentLiner>
        <ContentLiner>
          <div>
            <div className="CL_label">제목 :</div>
            <input
              type="text"
              className="CL_content"
              onChange={(e) => {
                setPostUp({
                  ...postUp,
                  title: e.target.value,
                });
              }}
            ></input>
          </div>
        </ContentLiner>
        <ContentTextArea
          onChange={(e) => {
            setPostUp({
              ...postUp,
              body: e.target.value,
            });
          }}
        ></ContentTextArea>
        <CustomButton
          value="수정하기"
          css={buttonCss}
          onClick={() => {
            onClickUpdateH();
          }}
        ></CustomButton>
      </ContentBox>
    </Layout>
  );
};

export default Update;

// const Header = styled.div`
//   width: 80%;
//   height: 60px;
//   background: black;
//   margin: 0 auto;
//   border-radius: 0% 0% 50px 50px;
//   color: orange;
//   padding-left: 30px;
//   padding-top: 20px;
//   font-size: 1.5em;
// `;
const ContentBox = styled.div`
  width: 70%;
  height: 600px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: flex-start;
  border-radius: 30px;
  gap: 10px;
`;

const ContentLiner = styled.div`
  width: 78%;
  height: 15%;
  margin: inherit;

  .CL_label {
    width: inherit;
    height: 50%;
    margin-bottom: 10px;
  }
  .CL_content {
    width: 100%;
    padding-left: 3%;
    height: 50%;
    font-size: 20px;
    border: 1px solid silver;
    border-radius: 20px;
  }
`;
const ContentTextArea = styled.textarea`
  width: 80%;
  height: 59%;

  background: repeating-linear-gradient(red, red 1px, 0, yellow 20px);
  max-height: 800px;
  border: 1px solid black;
  border-radius: 20px;
  margin: 0 auto;
  padding: 3%;
  display: flex;
`;
