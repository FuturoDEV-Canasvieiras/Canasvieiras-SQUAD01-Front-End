import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

export default function CadastroForm() {
  const { handleChange, form, resetForm } = useForm({
    nome: "",
    senha: "",
    email: "",
  });
  const { createData } = useFetch("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createData(form);
    resetForm();
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center mb-4"
        style={{ height: "100%" }}
      >
        <form
          onSubmit={handleSubmit}
          className="col-4 formulario-borda"
          id="FormularioCadastroUsuario"
        >
          <h1 className="text-center">Cadastro</h1>
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
            <span>
              Clique{" "}
              {
                <a href="/">
                  <strong>aqui</strong>
                </a>
              }{" "}
              para fazer login
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
