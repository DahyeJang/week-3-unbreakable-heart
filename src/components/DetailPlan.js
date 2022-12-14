import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getPlans, __deletePlans } from "../redux/modules/plansSlicer";
import useED from "./hooks/useED";
import CustomButton from "./CustomButton";

const DetailPlan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonCss =
    " font-size: 20px; height: 30px; width :10%; border : none; background: #1e1e1e; color : orange; border-radius :20px;";
  const hoverCss = "background-color:#FF5F00; color:black; transition: 0.6s;";

  useED(__getPlans);

  function deleteHandler(id) {
    dispatch(__deletePlans({ id }));
    navigate("/");
  }
  function goUpdatePage(id) {
    navigate(`/detail/${id}/update`);
  }
  const params = useParams();
  const { plans } = useSelector((state) => state.plans);
  const total = plans.filter((plan) => plan.id === params.id);
  return (
    <>
      {total?.map((total) => (
        <StContent key={total.id}>
          <StTop>
            <CustomButton
              value="수정"
              css={buttonCss}
              hover={hoverCss}
              onClick={() => {
                goUpdatePage(total.id);
              }}
            ></CustomButton>
            <CustomButton
              value="삭제"
              css={buttonCss}
              hover={hoverCss}
              onClick={() => {
                deleteHandler(total.id);
              }}
            ></CustomButton>
          </StTop>
          <StName>{total.name}</StName>
          <h1>{total.title}</h1>
          <StHr />
          <StBody>{total.body}</StBody>
        </StContent>
      ))}
    </>
  );
};

export default DetailPlan;

const StTop = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding-right: 20px;
  align-items: center;
  height: 50px;
`;

const StContent = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  margin-top: 50px;
  padding: 20px 70px 50px 70px;
  border-radius: 20px;
  height: 350px;
  box-shadow: 0px 0px 3px 0px #1e1e1e;
  font-family: "Pretendard-Regular";
  border: 1px solid #ddd;
  /* background-image: url(https://img.freepik.com/free-photo/white-paper-texture_1194-5998.jpg?w=1480&t=st=1670657632~exp=1670658232~hmac=4a19288b44382732e4f0a3c64302825305ca181b7754df9b89ddd89e0a4efb16);
  /* background-color: #fff9df; */
`;

const StName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const StBody = styled.p`
  font-size: 20px;
  margin-top: 30px;
`;

const StHr = styled.hr`
  border: 0.5px solid #1e1e1e;
`;
