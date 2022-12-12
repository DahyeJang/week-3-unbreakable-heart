// src/App.js

import React from "react";
import styled from "styled-components";

// 1. styled-components를 만들었습니다.

function CustomButton(props) {
  let buttonCss = props.css;
  let hoverCss = props.hover;
  if (buttonCss === "mode_1") {
    buttonCss =
      "border :none; background : black; color: white; font-size :22px;  ";
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
