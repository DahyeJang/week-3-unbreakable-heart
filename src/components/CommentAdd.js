import React from "react";
import styled from "styled-components";
import CustomButton from "../components/CustomButton";

function CommentAdd() {
  return (
    <>
      <StH1>메시지 남기기✏</StH1>
      <StForm>
        <StInputGroup>
          닉네임
          <StInput></StInput>
          댓글
          <StInput2></StInput2>
        </StInputGroup>
        <StBtn>등록하기</StBtn>
      </StForm>
    </>
  );
}

export default CommentAdd;

const StH1 = styled.h1`
  padding: 20px 10px 10px 50px;
  font-size: 28px;
`;

const StForm = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  align-items: center;
  padding: 30px;
  background-color: #064f00;
  margin-top: 20px;
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  color: white;
`;

const StInput = styled.input`
  border-radius: 12px;
  border: none;
  width: 200px;
  height: 40px;
`;

const StInput2 = styled.input`
  border-radius: 12px;
  border: none;
  width: 500px;
  height: 40px;
`;

const StBtn = styled.button`
  background-color: #ff5f00;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  border: none;
  color: black;
  font-weight: 700;
`;
