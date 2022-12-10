import React from "react";

const Update = () => {
  const buttonCss =
    "font-size: 18px; width : 20%; height : fit-content;  border : none; margin : 20px   auto;" +
    "background: black; color : orange; border-radius :20px;";
  return (
    <div id="body">
      <Header>Home</Header>
      <ContentBox>
        <ContentLiner>
          <div>
            <div className="CL_label">작성자 : </div>
            <div className="CL_content">김박사</div>
          </div>
        </ContentLiner>
        <ContentLiner>
          <div>
            <div className="CL_label">제목 :</div>
            <div className="CL_content">
              안녕하세용 김박사의 신년계획입니다.
            </div>
          </div>
        </ContentLiner>
        <ContentTextArea>
          LoremIpsum<br></br>LoremIpsum
        </ContentTextArea>
        <CustomButton value="글쓰기" css={buttonCss}></CustomButton>
      </ContentBox>
    </div>
  );
};

export default Update;
