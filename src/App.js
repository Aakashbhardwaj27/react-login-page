import React,{useState} from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./screens/main";
import { useSelector } from "react-redux";
import Dashboard from "./screens/dashboard";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import NotFound from "./NotFound";
export default function App() {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={userInfo?<Dashboard />:<Main />}></Route>
          <Route path="*" element={<NotFound />} ></Route>
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
