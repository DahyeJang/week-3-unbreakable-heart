import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __createComments } from "../redux/modules/comments";
import useIP from "./hooks/useIP";
import CustomButton from "./CustomButton";

function CommentAdd() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [comment, onChangeHandler] = useIP({
    id: "",
    planId: `${id}`,
    name: "",
    content: "",
  });

  const buttonCss =
    " width: 140px; height: 40px;border-radius: 20px; border: none; color: black; font-weight: 700; font-size: 15px;";

  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setComment({ ...comment, [name]: value });
  // };

  const createHandler = (e) => {
    if (comment.name.trim() === "") {
      alert("닉네임을 입력해주세요");
    } else if (comment.content.trim() === "") {
      alert("내용을 입력해주세요");
    } else {
      e.preventDefault();
      dispatch(__createComments(comment));
      onChangeHandler(e, { name: "", content: "" });
    }
  };

  return (
    <>
      <StH1>메시지 남기기✏</StH1>
      <StForm onSubmit={createHandler}>
        <StInputGroup>
          닉네임
          <StInput
            type="text"
            name="name"
            value={comment.name}
            onChange={onChangeHandler}
          ></StInput>
          댓글
          <StInput2
            type="text"
            name="content"
            value={comment.content}
            onChange={onChangeHandler}
          ></StInput2>
        </StInputGroup>
        <CustomButton css={buttonCss} value="글쓰기"></CustomButton>
      </StForm>
    </>
  );
}

export default CommentAdd;

const StH1 = styled.h1`
  padding: 20px 10px 10px 50px;
  font-size: 28px;
`;

const StForm = styled.form`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  align-items: center;
  padding: 30px;
  background-color: black;
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

// const StBtn = styled.button`
//   background-color: #ff5f00;
//   width: 140px;
//   height: 40px;
//   border-radius: 20px;
//   border: none;
//   color: black;
//   font-weight: 700;
//   font-size: 15px;
// `;
