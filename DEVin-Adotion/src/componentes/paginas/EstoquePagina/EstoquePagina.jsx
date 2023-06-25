import { ListaEstoque } from "../../listas";

export default function EstoquePagina() {
    return(
        <>
        <header className="container-fluid py-4">
                <h1>Lista de Produtos</h1>
        </header>

        <ListaEstoque />

        <div className="container mt-4 d-flex justify-content-center">
                <a className="btn btn-primary text-white" href="/cadastro-produtos">Cadastrar Produto</a>
        </div>
        </>
    )
}