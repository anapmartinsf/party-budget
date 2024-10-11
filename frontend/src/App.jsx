import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default App;
