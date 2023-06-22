import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { fetchLoginData } from "../../../hooks/useFetch";
import { Navigate } from "react-router-dom";

export default function LoginFormulario() {
  const { handleChange, form, resetForm } = useForm({
    senha: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetchLoginData(form);
      if (response && response.success) {
        setStatus("Login bem sucedido!");
      } else {
        setStatus("Credenciais inválidas.");
      }
    } catch (error) {
      setStatus("Ocorreu um erro ao processar a solicitação");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.senha) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    handleLogin();
    resetForm();
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center full-height"
        style={{ height: "100%" }}
        main
      >
        <form
          onSubmit={handleSubmit}
          className="col-4"
          id="FormularioLoginUsuario"
        >
          <h1 className="text-center">Login</h1>
          {errorMessage && <p>{errorMessage}</p>}
          <label htmlFor="email">E-mail:</label>
          <br />
          <input
            className="form-control my-2"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
          <label htmlFor="senha">Senha:</label>
          <input
            className="form-control my-2"
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            placeholder="Digite uma senha"
          />
          <button
            type="submit"
            className="button-form btn btn-success w-100 my-2"
          >
            Entrar
          </button>
          <div className="text-center">
            <span>
              Clique
              <span
                onClick={<Navigate to="/cadastro-usuario" replace={true} />}
              >
                aqui
              </span>
              para cadastrar
            </span>
          </div>
          {status && <p>{status}</p>}
          {status === "Login bem sucedido!" ? (
            <Navigate to="/dashboard" replace={true} />
          ) : null}
        </form>
      </div>
    </>
  );
}
