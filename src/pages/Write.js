import React from "react";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { __createPlans } from "../redux/modules/plansSlicer";
import { useNavigate } from "react-router-dom";
import useIP from "../components/hooks/useIP";
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
//css
const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, writeHandler] = useIP({
    name: "",
    title: "",
    body: "",
  });

  function createHandler() {
    if (post.name.trim() === "") {
      toast("닉네임이 비어져 있습니다!");
    } else if (post.title.trim() === "") {
      toast("제목이 비어져 있습니다!");
    } else if (post.body.trim() === "") {
      toast("내용이 비어져 있습니다!");
    } else {
      dispatch(__createPlans(post));
      navigate("/");
    }
  }

  const buttonCss =
    "font-size: 18px; width : 20%; height : fit-content;  border : none; margin : 20px   auto;" +
    "background: black; color : orange; border-radius :20px; ";

  const hoverCss = "background-color:#FF5F00; color:black; transition: 0.7s;";
  return (
    <Layout>
      <Header />
      <ContentBox>
        <NaDiv>
          작성자 :
          <input
            type="text"
            name="name"
            className="CL_Name"
            value={post.name}
            onChange={writeHandler}
            maxLength={7}
            // onChange={(e) => {
            //   const { value } = e.target;
            //   setPost({
            //     ...post,
            //     name: value,
            //   });
            // }}
          />
        </NaDiv>
        <TiDiv>
          제목 :
          <input
            type="text"
            name="title"
            className="CL_Title"
            value={post.title}
            onChange={writeHandler}
            maxLength={15}
            // onChange={(e) => {
            //   const { value } = e.target;
            //   setPost({
            //     ...post,
            //     title: value,
            //   });
            // }}
          ></input>
        </TiDiv>
        <ContentTextArea
          name="body"
          value={post.body}
          onChange={writeHandler}
          // onChange={(e) => {
          //   const { value } = e.target;
          //   setPost({
          //     ...post,
          //     body: value,
          //   });
          // }}
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
      <ToastContainer position="top-center" theme="dark" />
    </Layout>
  );
};

export default Write;
