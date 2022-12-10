import React from "react";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
const Header = styled.div`
  width: 80%;
  height: 60px;
  background: black;
  margin: 0 auto;
  border-radius: 0% 0% 50px 50px;
  color: orange;
  padding-left: 30px;
  padding-top: 20px;
  font-size: 1.5em;
`;
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
const Write = () => {
  const buttonCss =
    "font-size: 18px; width : 20%; height : fit-content;  border : none; margin : 20px   auto;" +
    "background: black; color : orange; border-radius :20px;";
  return (
    <div id="body">
      <Header>Home</Header>
      <ContentBox>
        <ContentLiner>
          <div>
            <div className="CL_label">작성자 : </div>
            <input type="text" className="CL_content"></input>
          </div>
        </ContentLiner>
        <ContentLiner>
          <div>
            <div className="CL_label">제목 :</div>
            <input type="text" className="CL_content"></input>
          </div>
        </ContentLiner>
        <ContentTextArea></ContentTextArea>
        <CustomButton value="글쓰기" css={buttonCss}></CustomButton>
      </ContentBox>
    </div>
  );
};

export default Write;
