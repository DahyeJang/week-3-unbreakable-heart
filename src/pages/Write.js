import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { __createPlans } from "../redux/modules/plansSlicer";
import { useNavigate } from "react-router-dom";

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
//css
const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    title: "",
    content: "",
  });

  function createHandler() {
    console.log("access createHandle");
    console.log(post);
    dispatch(__createPlans(post));
    navigate("/");
  }

  console.log(post);

  const buttonCss =
    "font-size: 18px; width : 20%; height : fit-content;  border : none; margin : 20px   auto;" +
    "background: black; color : orange; border-radius :20px; ";

  const hoverCss = "background-color:#FF5F00; color:black; transition: 0.7s;";
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
                const { value } = e.target;
                setPost({
                  ...post,
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
              onChange={(e) => {
                const { value } = e.target;
                setPost({
                  ...post,
                  title: value,
                });
              }}
            ></input>
          </div>
        </ContentLiner>
        <ContentTextArea
          onChange={(e) => {
            const { value } = e.target;
            setPost({
              ...post,
              content: value,
            });
          }}
        ></ContentTextArea>
        <CustomButton
          value="글쓰기"
          css={buttonCss}
          hover={hoverCss}
          onClick={() => {
            createHandler();
          }}
        ></CustomButton>
      </ContentBox>
    </Layout>
  );
};

export default Write;
