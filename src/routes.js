import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Newsapi from "./pages/newsapi";
import NewsapiBusiness from "./pages/business";
import NewsapiArticles from "./pages/sports";

import NewsapiSports from "./pages/sports";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newsapi />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
