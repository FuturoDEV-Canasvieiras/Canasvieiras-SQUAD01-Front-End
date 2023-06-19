import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CadastroUserPagina from "../paginas/CadastroUserPagina/CadastroUserPagina";
import LoginPagina from "../paginas/LoginPagina/LoginPagina";
import ArmazemPagina from "../paginas/ArmazemPagina/ArmazemPagina";
import Error from "../paginas/Error/Error";
import Home from "../paginas/Home/Home";

const PaginaPrincipal = () => {
  return <Home />;
};

const PaginaErro = () => {
  return <Error />;
};

const Login = () => {
  return <LoginPagina />;
};

const CadastroUsuario = () => {
  return <CadastroUserPagina />;
};

const PaginaArmazen = () => {
  return <ArmazenPagina />;
};

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success container-fluid">
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
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          <Route path="/*" element={<PaginaErro />} />
          <Route path="/armazem-pagina" element={<PaginaArmazem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
