// src/App.js

import React from "react";
import styled from "styled-components";

// 1. styled-components를 만들었습니다.

function CustomButton(props) {
  let buttonCss = props.css;
  if (buttonCss === "mode_1") {
    buttonCss =
      "border :none; background : black; color: white; font-size :22px;  ";
  }

  const StyledButton = styled.button`
    ${buttonCss}
  `;
  return (
    <>
      <StyledButton>{props.value}</StyledButton>
    </>
  );
}

export default CustomButton;
