import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//추가된 부분 (페이지)
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Update from "../pages/Update";
import Hometest from "../pages/Hometest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hometest" element={<Hometest />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
