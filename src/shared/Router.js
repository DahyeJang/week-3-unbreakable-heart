import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//추가된 부분 (페이지)
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Update from "../pages/Update";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
