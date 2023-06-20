import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CadastroUserPagina from "../paginas/CadastroUserPagina/CadastroUserPagina";
import LoginPagina from "../paginas/LoginPagina/LoginPagina";
import ArmazemPagina from "../paginas/ArmazemPagina/ArmazemPagina";
import Error from "../paginas/Error/Error";
import Home from "../paginas/Home/Home";
import Dashboard from "../paginas/Dashboard/Dashboard";
import { CadastroProdutoForm } from "../formularios";
import { CadastroProdutoPagina } from "../paginas";

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

const PaginaArmazem = () => {
  return <ArmazemPagina />;
};

const PaginaDashboard = () => {
  return <Dashboard />;
};

const PaginaCadastroProduto = () => {
  return <CadastroProdutoPagina />;
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success container-fluid p-4">
        <Link to="/" className="navbar-brand">
          Dev in Adotion
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={closeNav}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cadastro-usuario"
                className="nav-link"
                onClick={closeNav}
              >
                Cadastrar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link" onClick={closeNav}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cadastro-produtos"
                className="nav-link"
                onClick={closeNav}
              >
                cadastro produtos
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
          <Route path="/dashboard" element={<PaginaDashboard />} />
          <Route
            path="/cadastro-produtos"
            element={<PaginaCadastroProduto />}
          />
          <Route path="/*" element={<PaginaErro />} />
          <Route path="/armazem-pagina" element={<PaginaArmazem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
