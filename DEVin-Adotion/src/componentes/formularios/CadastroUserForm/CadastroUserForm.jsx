import { useState} from "react";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

export default function CadastroForm() {
  const { handleChange, form, resetForm } = useForm({
    nome: "",
    senha: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState('');
  const { createData } = useFetch("http://localhost:8080/usuarios/cadastro");
  
  let userEmail = localStorage.getItem('email');


  const handleSubmit = (event) => {

    event.preventDefault();

    if (!form.email || !form.senha || !form.nome) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    } else if(form.email === userEmail) {
      setErrorMessage('Este e-mail já está cadastrado.');
      return;
    } else {
      setErrorMessage('');
    }

    try{
      const response = createData(form);
        if (response) {
         localStorage.setItem(response.email, JSON.stringify);
        }

      setStatus('Cadastro bem sucedido!');
      resetForm();
    } catch (error) {
      console.error("Error creating data:", error);
      setErrorMessage('Ocorreu um erro ao criar o cadastro.');
    }
  };
  
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <form
          onSubmit={handleSubmit}
          className="col-4"
          id="FormularioCadastroUsuario"
        >
          <h1 className="text-center">Cadastro</h1>
          {errorMessage && <p>{errorMessage}</p>}
          <label htmlFor="nomeCompleto">Nome completo:</label>
          <input
            className="form-control"
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Exemplo: João da Silva Pereira"
          />
          <br />
          <label htmlFor="email">Endereço de E-mail:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
          <br />
          <label htmlFor="senha">Senha:</label>
          <input
            className="form-control"
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            placeholder="Digite uma senha"
          />
          <br />
          <button type="submit" className="button-form btn btn-success w-100">
            Cadastrar
          </button>
          <div className="text-center">
            {status ? <p> {status} <br/>Faça o login clicando <Link to="/login">aqui</Link>!</p> : <span>Se já tiver uma conta, <br/> clique <Link to="/login">aqui</Link> para fazer login</span>}
          </div>
        </form>
      </div>
    </>
  );
}
