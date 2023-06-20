import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

export default function CadastroProdutoForm() {
  const { handleChange, form, resetForm } = useForm({
    armazem: "",
    produto: "",
    quantidade: 0,
    animal: "",
    categoria: "",
  });
  const { createData } = useFetch("http://localhost:8080/estoque/cadastro");

  const handleSubmit = (event) => {
    event.preventDefault();
    createData(form);
    resetForm();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <form onSubmit={handleSubmit} className="col-8">
        <h1 className="text-center">Cadastro Estoque</h1>
        <label htmlFor="armazem">Armazenamento:</label>
        <br />
        <select
          name="armazem"
          value={form.armazem}
          onChange={handleChange}
          className="form-control"
        >
          <option value="" disabled>
            Selecione o Estoque
          </option>
          <option value="Estoque 01">Estoque 01</option>
          <option value="Estoque 02">Estoque 02</option>
          <option value="Estoque 03">Estoque 03</option>
          <option value="Estoque 04">Estoque 04</option>
        </select>
        <br />
        <label htmlFor="produto">Produto:</label>
        <br />
        <select
          name="produto"
          value={form.produto}
          onChange={handleChange}
          className="form-control"
        >
          <option value="" disabled>
            Selecione o Produto
          </option>
          <option value="racao">Ração</option>
          <option value="antiparasitario">Atiparasitário</option>
          <option value="antipulgas">Atipulgas</option>
        </select>
        <br />
        <label htmlFor="quantidade">Quantidade:</label>
        <br />
        <input
          type="number"
          name="quantidade"
          value={form.quantidade}
          onChange={handleChange}
          className="form-control"
        />
        <br />
        <label htmlFor="animal">Animal:</label>
        <br />
        <select
          name="animal"
          value={form.animal}
          onChange={handleChange}
          className="form-control"
        >
          <option value="" disabled>
            Selecione o Animal
          </option>
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
        </select>
        <br />
        <label htmlFor="categoria">Categoria:</label>
        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          className="form-control"
        >
          <option value="" disabled>
            Selecione a Categoria
          </option>
          <option value="adulto">Adulto</option>
          <option value="filhote">Filhote</option>
        </select>
        <button
          type="submit"
          className="button-form btn btn-success w-100 my-3"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
