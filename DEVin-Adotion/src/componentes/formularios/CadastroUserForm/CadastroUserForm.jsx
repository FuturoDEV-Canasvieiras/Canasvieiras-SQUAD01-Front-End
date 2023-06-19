import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

export default function CadastroForm() {
<<<<<<< HEAD
    const { handleChange, form, resetForm } = useForm({ nome: "", senha: "", email: "" })
    const { createData } = useFetch('')

    const handleSubmit = (event) => {
        event.preventDefault();
        createData(form)
        resetForm();
    }
    return (
        <>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                Nome:<br />
                <input type="text" name="nome" value={form.nome} onChange={handleChange} /><br />
                E-mail:<br />
                <input type="email" name="email" value={form.email} onChange={handleChange} /><br />
                Senha:<br />
                <input type="password" name="senha" value={form.senha} onChange={handleChange} /><br />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}
=======
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
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <form
          onSubmit={handleSubmit}
          className="col-4"
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
>>>>>>> 23791525cc1d67201ff2e7c5de63d09f13310aac
