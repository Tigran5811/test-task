import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Favorite from "../../pages/Favorite/Favorite";
import React from "react";

const AppLayout = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default AppLayout;
