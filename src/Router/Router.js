import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import ApiArticle from "../Components/Articles/Api/Api-article";
import JSONart from "../Components/Articles/Json/JSON";
import Node from "../Components/Articles/Node";
import Header from "../Components/Header";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<App />} />
      <Route path="/node" element={<Node />} />
      <Route path="/json" element={<JSONart />} />
      <Route path="/api" element={<ApiArticle />} />
    </Route>
  )
);
