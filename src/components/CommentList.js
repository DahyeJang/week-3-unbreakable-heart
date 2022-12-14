import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  __getComment,
  __deleteComments,
  __updateComments,
} from "../redux/modules/comments";
import useED from "./hooks/useED";
import CustomButton from "./CustomButton";
function CommentArea(props) {
  const [revise, setRevise] = useState(false);
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    id: props.id,
    planId: props.planId,
    name: props.name,
    content: props.content,
  });
  const buttonCss = "mode_3";
  const hoverCss = "background-color:#FF5F00; color:black; transition: 0.7s;";
  function updateHandler(comment) {
    dispatch(__updateComments(comment));
  }

  if (revise === false) {
    return (
      <Molad>
        <div className="name_zone">
          <StName>{props.name}</StName>
        </div>
        <div className="comment_zone">
          <StComment>{props.content}</StComment>
        </div>
        <div className="button_zone">
          <CustomButton
            value="수정"
            css={buttonCss}
            hover={hoverCss}
            onClick={(e) => {
              setRevise(true);
            }}
          >
            수정하기
          </CustomButton>
          <CustomButton
            value="삭제"
            css={buttonCss}
            hover={hoverCss}
            onClick={() => {
              props.onDeleteTodo(props.id);
            }}
          >
            삭제하기
          </CustomButton>
        </div>
      </Molad>
    );
  } else {
    return (
      <Molad>
        <div className="name_zone">
          <StName>{props.name}</StName>
        </div>
        <div className="comment_zone">
          <textarea
            spellchek="false"
            defaultValue={props.content}
            onChange={(e) => {
              const { value } = e.target;
              setComment({
                ...comment,
                content: value,
              });
            }}
          ></textarea>
        </div>
        <div className="button_zone">
          <CustomButton
            value="저장"
            css={buttonCss}
            hover={hoverCss}
            onClick={() => {
              setRevise(false);
              updateHandler(comment);
            }}
          >
            수정저장
          </CustomButton>
        </div>
      </Molad>
    );
  }
}

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
            <CommentArea
              key={comment.id}
              id={comment.id}
              planId={comment.planId}
              name={comment.name}
              content={comment.content}
              onDeleteTodo={onDeleteTodo}
            ></CommentArea>
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
const Molad = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 10px;
  display: flex;
  border-radius: 12px;
  gap: 3px;

  .name_zone {
    width: 20%;
    height: inherit;
    background: #4a4a4a;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .comment_zone {
    width: 60%;
    height: inherit;
    padding-left: 10px;
    display: flex;
    background: #d6d6d6;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
  }
  .comment_zone textarea {
    width: 95%;
    height: 80%;
    resize: none;
    border-radius: 12px;
    font-family: "Pretendard-Regular";
    font-size: 18px;
    border: none;
  }
  .button_zone {
    width: 20%;
    height: inherit;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
`;
