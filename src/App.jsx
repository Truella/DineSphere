import "./App.css";
import Header from "./UI/Header";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import MakeReservationPage from "./pages/MakeReservationPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import Footer from './UI/Footer'
import React from "react";
import { Route, Routes } from "react-router-dom";
import CartBtn from "./components/CartBtn";
export default function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/menu" element={<Menupage />}></Route>{" "}
        <Route path="/reservation" element={<MakeReservationPage />}></Route>{" "}
        <Route path="/order-online" element={<OrderOnlinePage />}></Route>
      </Routes>
      <CartBtn/>
      <Footer/>
    </div>
  );
}
