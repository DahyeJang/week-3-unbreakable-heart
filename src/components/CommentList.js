import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getComment, __deleteComments } from "../redux/modules/comments";
import useED from "./hooks/useED";

function CommentList() {
  const dispatch = useDispatch();

  const { id } = useParams();
  useED(__getComment);
  // useEffect(() => {
  //   dispatch(__getComment());
  // }, [dispatch]);
  const commentT = useSelector((state) => state.comments.comments);

  const onDeleteTodo = (id) => {
    dispatch(__deleteComments(id));
  };

  return (
    <>
      {commentT.map((comment) => {
        if (comment.planId === id) {
          return (
            <StForm key={comment.id}>
              <div>
                <StName>{comment.name}</StName>
                <StComment>{comment.content}</StComment>
              </div>
              <StTop>
                <button>수정</button>
                <button onClick={() => onDeleteTodo(comment.id)}>삭제</button>
              </StTop>
            </StForm>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

export default CommentList;

const StForm = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px 10px 50px;
  justify-content: space-between;
  background-color: #efefef;
  gap: 60px;
  margin-top: 20px;
  height: 50px;
`;

const StName = styled.span`
  font-size: 20px;
  font-weight: 700;
  padding-right: 20px;
`;

const StComment = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const StTop = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 20px;
  align-items: center;
`;
