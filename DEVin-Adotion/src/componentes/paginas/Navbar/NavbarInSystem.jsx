import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import {
  CadastroProdutoPagina,
  ArmazemPagina,
  Dashboard,
  Error,
  LoginPagina,
} from "..";

export default function NavbarSystem() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light container-fluid bg-light py-4">
        <Link to="/login" className="navbar-brand">
          Dev in Adotion
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cadastro-produtos" className="nav-link">
                Cadastro Produtos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cadastro-armazem" className="nav-link">
                Armazém
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/cadastro-produtos"
            element={<CadastroProdutoPagina />}
          />
          <Route path="/cadastro-armazem" element={<ArmazemPagina />} />
          <Route path="/*" element={<Error />} />
          <Route path="/login" element={<LoginPagina />} />
        </Routes>
      </div>
    </Router>
  );
}
