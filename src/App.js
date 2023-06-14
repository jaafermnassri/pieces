import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";


import SmoothScroll from "smooth-scroll";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./Redux/actions/userActions";
import Home from "./components/Home";
import Add from "./components/add piece/Add";
import Detail from "./components/details/Detail";
import Upload from "./components/upload/Upload";
import { getAllPieces } from "./Redux/actions/pieceActions";
import PieceList from "./components/Listpieces/PieceList";
import ForClient from "./components/private/ForClient";
import ForAdmin from "./components/private/ForAdmin";
import Dashboard from "./components/dashboard/Dashboard";
import Accept from "./components/accept/Accept";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
   
  }, []);
  
  return (
    <div>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Plist" element={<ForClient><PieceList/></ForClient>} />
        <Route path="/dashboard" element={<ForAdmin><Dashboard/></ForAdmin>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/add/:id" element={<Add/>} />
        <Route path="/accept/:id" element={<Accept/>} />
      </Routes>
    </div>
  );
};

export default App;
