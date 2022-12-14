import React from "react";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { __updatePlans } from "../redux/modules/plansSlicer";

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
const Update = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { plans } = useSelector((state) => state.plans);
  const total = plans.filter((plan) => plan.id === id);

  const [plan, setPlan] = useState({
    id: total[0].id,
    name: total[0].name,
    title: total[0].title,
    body: total[0].body,
  });
  const navigate = useNavigate();

  function updateHandler() {
    dispatch(__updatePlans(plan));
    navigate(`/detail/${id}`);
  }
  const buttonCss =
    "font-size: 18px; width : 20%; height : fit-content;  border : none; margin : 20px   auto;" +
    "background: black; color : orange; border-radius :20px; ";

  const hoverCss = "background-color:#FF5F00; color:black; transition: 0.7s;";
  return (
    <Layout>
      <Header />
      {total?.map((total) => (
        <ContentBox key={total.id}>
          <ContentLiner>
            <div>
              <div className="CL_label">작성자 : </div>
              <input
                type="text"
                className="CL_content"
                defaultValue={total.name}
                onChange={(e) => {
                  const { value } = e.target;
                  setPlan({
                    ...plan,
                    name: value,
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
                defaultValue={total.title}
                onChange={(e) => {
                  const { value } = e.target;
                  setPlan({
                    ...plan,
                    title: value,
                  });
                }}
              ></input>
            </div>
          </ContentLiner>
          <ContentTextArea
            defaultValue={total.body}
            onChange={(e) => {
              const { value } = e.target;
              setPlan({
                ...plan,
                body: value,
              });
            }}
          ></ContentTextArea>
          <CustomButton
            value="수정하기"
            css={buttonCss}
            hover={hoverCss}
            onClick={() => updateHandler(total.id, plan)}
          ></CustomButton>
        </ContentBox>
      ))}
    </Layout>
  );
};

export default Update;
