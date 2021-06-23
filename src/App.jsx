import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={4000} position="top-center" />
      <Routes />
    </div>
  );
}

export default App;
