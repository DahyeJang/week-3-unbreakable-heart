import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import Layout from "./Layout";

const Header = () => {
  return (
    <StHeader>
      <Link to="/">
        <Stlogo src={logo} />
      </Link>
      <StSubject>중요한 것은 꺾이지 않는 마음</StSubject>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  height: 70px;
  border: 1px solid #ddd;
  padding: 0 20px;
  background-color: #1e1e1e;
  /* justify-content: center; */
  max-width: 1200px;
  min-width: 800px;
`;

const Stlogo = styled.img`
  padding-left: 50px;
  width: 35px;
`;

const StSubject = styled.span`
  @font-face {
    font-family: "yleeMortalHeartImmortalMemory";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/yleeMortalHeartImmortalMemory.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "NEXON Lv1 Gothic OTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "yleeMortalHeartImmortalMemory";
  font-size: 22px;
  font-weight: 700;
  color: white;
  padding-left: 30px;
`;
