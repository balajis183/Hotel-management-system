import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Customer from "../pages/Customer";
import ViewRooms from "../pages/ViewRooms";
import CreateRoom from "../pages/CreateRoom";
function NavRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createroom" element={<CreateRoom />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/viewrooms" element={<ViewRooms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NavRoutes;
