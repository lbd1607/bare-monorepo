import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "next/image";
import { Link, Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/TestPage" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
