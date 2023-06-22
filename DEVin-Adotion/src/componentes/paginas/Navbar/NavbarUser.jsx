import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { CadastroUserPagina, LoginPagina, Error } from "..";

export default function NavbarUser() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light container-fluid bg-light py-4">
        <Link to="/" className="navbar-brand">
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
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cadastro-usuario" className="nav-link">
                Cadastrar
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LoginPagina />} />
          <Route path="/login" element={<LoginPagina />} />
          <Route path="/cadastro-usuario" element={<CadastroUserPagina />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}
