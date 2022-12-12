import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Node from "../Components/Articles/Node";
import Header from "../Components/Header";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<App />} />
      <Route path="/node" element={<Node />} />
    </Route>
  )
);
