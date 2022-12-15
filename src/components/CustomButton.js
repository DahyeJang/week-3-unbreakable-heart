// src/App.js

import React from "react";
import styled from "styled-components";

// 1. styled-components를 만들었습니다.

function CustomButton(props) {
  let buttonCss = props.css;
  let hoverCss = props.hover;
  if (buttonCss === "mode_1") {
    buttonCss =
      " font-family: Pretendard-Regular; border :none; background : black; color: white; font-size :22px;  ";
  } else if (buttonCss === "mode_2") {
    buttonCss =
      "font-family: Pretendard-Regular; font-size: 22px; width :10%; : fit-content; height : fit-content;  border : none; background: black; color : white; border-radius :20px;";
  } else if (buttonCss === "mode_3") {
    buttonCss =
      "font-family: Pretendard-Regular;font-size : 16px; width : 40%; height : 60%; border : none; background: #ff5f00; color : black; border-radius :20px; ";
  }

  const StyledButton = styled.button`
    ${buttonCss}
    :hover {
      ${hoverCss}
    }
  `;
  return (
    <>
      <StyledButton onClick={props.onClick}>{props.value}</StyledButton>
    </>
  );
}

export default CustomButton;
