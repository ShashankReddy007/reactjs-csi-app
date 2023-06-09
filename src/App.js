import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddImprovement from "./components/AddImprovement";
import Improvement from "./components/Improvement";
import ImprovementsList from "./components/ImprovementsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/improvements" className="navbar-brand">
          CSI
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/improvements"} className="nav-link">
              Improvements
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ImprovementsList/>} />
          <Route path="/improvements" element={<ImprovementsList/>} />
          <Route path="/add" element={<AddImprovement/>} />
          <Route path="/improvements/:id" element={<Improvement/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
