import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

import CachorroLogin from "../../../imagens/cachorro-login.png";
import Rodape from "../../rodape/rodape";

export default function CadastroUserForm() {
  const { handleChange, form, resetForm } = useForm({
    nome: "",
    senha: "",
    email: "",
  });
  const { itens: usuarios, createData } = useFetch("http://localhost:8080/usuario/cadastro");
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.nome.trim().length === 0) {
      alert("O nome do usuário não pode ser vazio ou em branco");
      return;
    } else if (form.email.trim().length === 0) {
      alert("O email do usuário não pode ser vazio ou em branco");
      return;
    } else if (form.senha.trim().length === 0) {
      alert("A senha do usuário não pode estar vazia");
      return;
    }

    if (usuarios.some((usuario) => usuario.email === form.email)) {
      alert("Já existe um usuário cadastrado com esse email");
      return;
    }
    createData(form)
      .then((response) => {
        if (response.status === 200 || 201) {
          alert("Usuário cadastrado com sucesso!");
        } else {
          alert("Erro ao cadastrar o usuário. Por favor, verifique os dados e tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Erro ao cadastrar o usuário:", error);
        alert("Erro ao cadastrar o usuário. Por favor, verifique os dados e tente novamente.");
      });

    resetForm();
    navigate("/login")
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center full-height"
        style={{ height: "100%" }}
      >
        <img
          src={CachorroLogin}
          alt="cachorros e gatos"
          style={{ height: "500px" }}
        />
        <form
          onSubmit={handleSubmit}
          className="col-4 border"
          id="FormularioCadastroUsuario"
        >
          <h1 className="text-center">Cadastro</h1>
          <br />
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
        </form>
      </div>
    </>
  );
}
