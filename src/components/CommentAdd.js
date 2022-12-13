import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import nextId from "react-id-generator";
import { __createComments } from "../redux/modules/comments";
import useInput from "./hooks/useInput";

function CommentAdd() {
  // const [name, onChangeNameHandler] = useInput();
  // const [content, onChangeContentHandler] = useInput();

  const newId = nextId();
  const { id } = useParams();
  const { isLoading, error, plans } = useSelector((state) => state.comments);
  console.log("state", state);

  // useEffect(() => {
  //   dispatch(__getPlans());
  // }, [dispatch]);
  // if (isLoading) {
  //   return <div>로딩 중....</div>;
  // }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  const basicComment = {
    id: "",
    planId: "id",
    name: "",
    content: "",
  };

  const [comment, setComment] = useState({ basicComment });
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (comment.name.trim() === "" || comment.content.trim() === "") return;

    dispatch(__createComments({ ...comment, newId }));
    setComment(basicComment);
  };

  return (
    <>
      <StH1>메시지 남기기✏</StH1>
      <StForm onSubmit={onSubmitHandler}>
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
            name="name"
            value={comment.content}
            onChange={onChangeHandler}
          ></StInput2>
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

const StForm = styled.form`
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
