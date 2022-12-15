import React from "react";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { __updatePlans } from "../redux/modules/plansSlicer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContentBox = styled.div`
  max-width: 100%;
  height: 500px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: flex-start;
  border-radius: 30px;
  gap: 10px;
  padding: 30px 50px;
`;
const NaDiv = styled.div`
  width: 28%;
  display: flex;
  justify-content: end;
  font-size: 20px;
  .CL_Name {
    width: 150px;
    margin-left: 10px;
    border-radius: 10px;
  }
`;
const TiDiv = styled.div`
  width: 37%;
  display: flex;
  justify-content: end;
  font-size: 20px;
  .CL_Title {
    width: 250px;
    margin-left: 10px;
    border-radius: 10px;
  }
`;

const ContentTextArea = styled.textarea`
  width: 80%;
  height: 60%;
  background: repeating-linear-gradient(red, black 0.5px, 0, #fffbe6 30px);
  max-height: 700px;
  border: 2px solid black;
  border-radius: 20px;
  margin: 10px auto;
  padding: 2%;
  display: flex;
  font-size: 30px;
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
    if (plan.name === "") {
      toast("닉네임이 비어져 있습니다!");
    } else if (plan.title === "") {
      toast("제목이 비어져 있습니다!");
    } else if (plan.body.trim() === "") {
      toast("내용이 비어져 있습니다!");
    } else {
      dispatch(__updatePlans(plan));
      navigate(`/detail/${id}`);
    }
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
          <NaDiv>
            작성자 :
            <input
              type="text"
              className="CL_Name"
              defaultValue={total.name}
              maxLength={7}
              onChange={(e) => {
                const { value } = e.target;
                setPlan({
                  ...plan,
                  name: value,
                });
              }}
            ></input>
          </NaDiv>
          <TiDiv>
            제목 :
            <input
              type="text"
              className="CL_Title"
              defaultValue={total.title}
              maxLength={15}
              onChange={(e) => {
                const { value } = e.target;
                setPlan({
                  ...plan,
                  title: value,
                });
              }}
            ></input>
          </TiDiv>
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
      <ToastContainer position="top-center" theme="dark" />
    </Layout>
  );
};

export default Update;
