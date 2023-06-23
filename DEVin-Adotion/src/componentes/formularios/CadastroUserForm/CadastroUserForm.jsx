import { useState, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";
import { Navigate } from "react-router-dom";

export default function CadastroForm() {
  const { handleChange, form, resetForm } = useForm({
    nome: "",
    senha: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [status, setStatus] = useState("");
  const { createData } = useFetch("https://localhost:8080/usuarios");

  useEffect(() => {
    if (!form.email) return;

    const handleEmailRegistration = async () => {
      try {
        const response = await createData({
          nome: form.email,
          senha: form.senha,
          email: form.email,
        });
        if (response && response.success) {
          setIsEmailRegistered(true);
        } else {
          setIsEmailRegistered(false);
        }
      } catch (error) {
        console.error("Error checking email registration:", error);

        setIsEmailRegistered(false);
      }
    };

    handleEmailRegistration();
  }, [form.email, createData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.senha || !form.nome) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    if (isEmailRegistered) {
      setErrorMessage("O email já está cadastrado.");
      return;
    }

    try {
      await createData(form);
      setStatus("Cadastro bem sucedido!");
      resetForm();
    } catch (error) {
      console.error("Error creating data:", error);
      setErrorMessage("Ocorreu um erro ao criar o cadastro.");
      setStatus("Ocorreu um erro ao processar a solicitação");
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center full-height"
        style={{ height: "100%" }}
      >
        <form
          onSubmit={handleSubmit}
          className="col-4"
          id="FormularioCadastroUsuario"
        >
          <h1 className="text-center">Cadastro</h1>
          <br />
          {errorMessage && <p>{errorMessage}</p>}
          <label htmlFor="nomeCompleto">Nome completo:</label>
          <input
            className="form-control my-2"
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Exemplo: João da Silva Pereira"
          />
          <label htmlFor="email">Endereço de E-mail:</label>
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
            Cadastrar
          </button>
          <div className="text-center">
            <span>
              Clique{" "}
              <a href="/login">
                <strong>aqui </strong>
              </a>
              para fazer login
            </span>
            {status &&
              alert(`${status} Você será redirecionado para a página de login`)}
            {status === "Cadastro bem sucedido!" ? (
              <Navigate to="/login" replace={true} />
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
}
