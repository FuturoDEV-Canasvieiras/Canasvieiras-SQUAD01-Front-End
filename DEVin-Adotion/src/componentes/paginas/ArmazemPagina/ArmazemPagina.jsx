import { useFetch } from "../../../hooks/useFetch"
import { CadastroArmazemForm } from "../../formularios";

export default function ArmazemPagina() {
    const { itens: armazens } = useFetch("http://localhost:8080/armazem")
    return (
        <>
            <CadastroArmazemForm />
            <h2>Lista de Armazéns</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome do Armazém</th>
                        <th>Animal</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {armazens.map(item => {
                        return (
                            <>
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    <td>{item.animal}</td>
                                    <td>{item.situacao == true ? 'Disponível' : 'Indisponível'}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}