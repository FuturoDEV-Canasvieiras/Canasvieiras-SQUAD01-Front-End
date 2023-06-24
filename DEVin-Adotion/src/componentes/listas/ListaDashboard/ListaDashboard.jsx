import { useFetch } from "../../../hooks/useFetch";
import Rodape from "../../rodape/rodape";

export default function ListaDashboard() {
  const animalCategoria = (animal, categoria) => {
    const { itens: itensDash, error } = useFetch(
      `http://127.0.0.1:8080/estatisticas/${animal}/${categoria}`
    );
    if (error) {
      return <div>Erro ao carregar os dados do dashboard</div>;
    } else {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total de Itens</h5>
            <p className="card-text">{itensDash.total}</p>
            <h5 className="card-title">Antipulgas</h5>
            <p className="card-text">{itensDash.totalComAntipulgas}</p>
            <h5 className="card-title">Antiparasitário</h5>
            <p className="card-text">{itensDash.totalComAntiparasitario}</p>
            <h5 className="card-title">Kg de Ração</h5>
            <p className="card-text">{itensDash.mediaRacao}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4 className="p-2 h1-primary">Gato Adulto</h4>
          <div className="border border-primary">
            {animalCategoria("gato", "adulto")}
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="p-2 h1-primary">Gato Filhote</h4>
          <div className="border border-primary">
            {animalCategoria("gato", "filhote")}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4 className="p-2 h1-primary">Cachorro Adulto</h4>
          <div className="border border-primary">
            {animalCategoria("cachorro", "adulto")}
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="p-2 h1-primary">Cachorro Filhote</h4>
          <div className="border border-primary">
            {animalCategoria("cachorro", "filhote")}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
