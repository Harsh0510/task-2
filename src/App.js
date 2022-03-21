import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import "./App.css";
import { Routes, Route } from "react-router";
import GetAllUsers from "./Component/GetAllUsers/GetAllUsers";
import CreateUser from "./Component/CreateUser/CreateUser";
import UpdateUser from "./Component/UpdateUser/UpdateUser";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<GetAllUsers />} />
        <Route path='/createUser' element={<CreateUser />} />
        <Route path='/editUser/:id' element={<UpdateUser />} />
      </Routes>
      <Footer />
    </>
  );
}
