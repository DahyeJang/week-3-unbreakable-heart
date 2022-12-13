import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function CommentList() {
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <>
      <StForm>
        <div>
          <StName>닉네임</StName>
          <StComment>응원합니다! 힘내세요!</StComment>
        </div>
        <StTop>
          <button>수정</button>
          <button>삭제</button>
        </StTop>
      </StForm>
      <StForm>
        <div>
          <StName>닉네임</StName>
          <span>응원합니다! 힘내세요!</span>
        </div>
        <StTop>
          <button>수정</button>
          <button>삭제</button>
        </StTop>
      </StForm>
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
