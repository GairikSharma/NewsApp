import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Newsapi from "./pages/newsapi";
import Sports from "./pages/sports";
import Business from "./pages/business";
import NewsapiBusiness from "./pages/business";
import NewsapiArticles from "./pages/sports";
import Navbar from "./components/Navbar/navbar";

import NewsapiSports from "./pages/sports";

function Routing() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Newsapi />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
