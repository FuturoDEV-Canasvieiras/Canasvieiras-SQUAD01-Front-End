import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CadastroUserPagina from "../paginas/CadastroUserPagina/CadastroUserPagina";
import LoginPagina from "../paginas/LoginPagina/LoginPagina";

const Login = () => {
  return <LoginPagina />;
};

const CadastroUsuario = () => {
  return <CadastroUserPagina />;
};

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success container-fluid">
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
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;