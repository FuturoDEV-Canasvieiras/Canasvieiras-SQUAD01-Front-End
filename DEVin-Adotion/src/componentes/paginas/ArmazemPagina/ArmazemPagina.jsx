import { useFetch } from "../../../hooks/useFetch"
import { CadastroArmazemForm } from "../../formularios";

export default function ArmazemPagina() {
    const { itens: armazens } = useFetch("https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/armazens")
    return (
        <>
            <CadastroArmazemForm />
            <h2>lista de armazens disponiveis</h2>
            <table>
                <tr>
                    <th>Armazém</th>
                    <th>Animal</th>
                    <th>Situação</th>
                </tr>
                {armazens.map(item => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <td>{item.armazem}</td>
                                    <td>{item.animal}</td>
                                    <td>{item.situacao ? 'disponível' : 'indisponível'}</td>
                                </tr>
                            </tbody>
                        </>
                    )
                })}
            </table>
        </>
    )
}