import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Newsapi from "./pages/newsapi";
import Article from "./pages/sports";
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
        <Route path="/business" element=<h1>Business</h1>></Route>
        <Route path="/sports" element=<h1>Sports</h1>></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
