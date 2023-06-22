
import { useFetch } from "../../../hooks/useFetch"

export default function ListaEstoque() {
    const { itens: produtos, deleteData } = useFetch('http://648b306e17f1536d65ea8f26.mockapi.io/testeapi/cadastro_produto')

    function handleDelete(id) {
        deleteData(id);
        window.location.reload()
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Armazém</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos ? (produtos.map((item) => {
                        return (
                            <>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.armazem}</td>
                                    <td>{item.produto}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.categoria}</td>
                                    <button type="button">Editar</button>
                                    <button type="button" onClick={() => handleDelete(item.id)}>Remover</button>
                                </tr>
                            </>
                        )
                    })
                    ) : (
                        <p>nenhum produto cadastrado ainda</p>
                    )
                    }
                </tbody>
            </table>
        </>
    )
}