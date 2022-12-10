import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderSt>
      <HeaderLink to="/">Home</HeaderLink>
      <div>중요한건 꺾이지 않는 마음</div>
    </HeaderSt>
  );
};

export default Header;

const HeaderLink = styled(Link)`
  text-decoration: none;
`;

const HeaderSt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  height: 70px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid black;
  background-color: #1e1e1e;
  color: white;
  font-size: 20px;
`;
