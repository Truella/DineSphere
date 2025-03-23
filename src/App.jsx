import "./App.css";
import Header from "./UI/Header";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import MakeReservationPage from "./pages/MakeReservationPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import React from "react";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Header />
      <Routes basename={"DineSphere"}>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/menu" element={<Menupage/>}></Route>{" "}
        <Route path="/reservation" element={<MakeReservationPage />}></Route>{" "}
        <Route path="/order-online" element={<OrderOnlinePage />}></Route>
      </Routes>
    </div>
  );
}
