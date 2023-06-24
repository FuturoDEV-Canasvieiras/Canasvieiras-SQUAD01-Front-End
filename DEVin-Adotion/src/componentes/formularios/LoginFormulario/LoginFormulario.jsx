import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { useFetch } from "../../../hooks/useFetch";
import CachorroLogin from "../../../imagens/cachorro-login.png";
import Rodape from "../../rodape/rodape";

export default function LoginFormulario() {
  const navigate = useNavigate();
  const { handleChange, form, resetForm } = useForm({
    senha: "",
    email: "",
  });

  const { createData } = useFetch('http://localhost:8080/usuario/login');

  //limpar o localstorage ao entrar na tela de login
  localStorage.clear("usuario");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.email.trim().length === 0) {
      alert("O e-mail do usuário não pode ser vazio ou em branco");
      return;
    } else if (form.senha.trim().length === 0) {
      alert("A senha do usuário não pode ser vazia ou em branco");
      return;
    }
    createData(form)
      .then((response) => {
        if (response.status === 200 || 201) {
          navigate("/dashboard")
          localStorage.setItem("usuario", JSON.stringify(response));
        } else {
          alert("Erro ao entrar, verifique suas credenciais.");
        }
      })
      .catch((error) => {
        alert("Erro ao entrar: email ou senha incorreto(s).");
        console.log(error);
      });
    resetForm();
  };


  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center full-height"
        style={{ height: "100%" }}
        main="true"
      >
        <img
          src={CachorroLogin}
          alt="cachorros e gatos"
          style={{ height: "500px" }}
        />
        <form
          onSubmit={handleSubmit}
          className="col-4 border"
          id="FormularioLoginUsuario"
        >
          <h1 className="text-center">Login</h1>
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
        </form>
      </div>
    </>
  );
}





