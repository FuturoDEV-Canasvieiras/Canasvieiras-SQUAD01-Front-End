import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

export default function CadastroProdutoForm() {
  const { handleChange, form, resetForm } = useForm({
    armazenamento: "",
    produto: "",
    quantidade: 0,
    animal: "",
    categoria: "",
  });
  const { createData } = useFetch(
    "https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/cadastro_produto"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    createData(form);
    resetForm();
  };

  return (
    <div className="container">
      <h1 className="mt-4">Cadastro Estoque</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="armazenamento">Armazenamento:</label>
          <select
            className="form-control"
            name="armazenamento"
            value={form.armazenamento}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecione o Estoque
            </option>
            <option value="Estoque 01">Estoque 01</option>
            <option value="Estoque 02">Estoque 02</option>
            <option value="Estoque 03">Estoque 03</option>
            <option value="Estoque 04">Estoque 04</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="produto">Produto:</label>
          <select
            className="form-control"
            name="produto"
            value={form.produto}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecione o Produto
            </option>
            <option value="racao">Ração</option>
            <option value="antiparasitario">Antiparasitário</option>
            <option value="antipulgas">Antipulgas</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            className="form-control"
            type="number"
            name="quantidade"
            value={form.quantidade}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="animal">Animal:</label>
          <select
            className="form-control"
            name="animal"
            value={form.animal}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecione o Animal
            </option>
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoria:</label>
          <select
            className="form-control"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecione a Categoria
            </option>
            <option value="adulto">Adulto</option>
            <option value="filhote">Filhote</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          Cadastrar produto
        </button>
      </form>
    </div>
  );
}
