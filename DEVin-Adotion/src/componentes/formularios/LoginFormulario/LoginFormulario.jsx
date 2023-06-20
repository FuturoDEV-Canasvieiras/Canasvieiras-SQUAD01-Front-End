import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

export default function LoginFormulario() {
  const { handleChange, form, resetForm } = useForm({ email: "", senha: "" });
  const { getData } = useFetch("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getData(form);
    resetForm();
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
          id="FormularioLoginUsuario"
        >
          <h1 className="text-center">Login</h1>
          <label htmlFor="email">Endereço de E-mail:</label>
          <br />
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
          <br />
          <input
            className="form-control"
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            placeholder="Digite sua senha"
          />
          <br />
          <button type="submit" className="button-form btn btn-success w-100">
            Entrar
          </button>
          <div className="text-center">
            <span>
              Clique{" "}
              {
                <a href="/cadastro_usuario">
                  <strong>aqui</strong>
                </a>
              }{" "}
              para cadastrar
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
