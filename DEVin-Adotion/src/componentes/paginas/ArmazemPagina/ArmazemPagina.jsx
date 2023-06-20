import { useFetch } from "../../../hooks/useFetch"
import { CadastroArmazemForm } from "../../formularios";

export default function ArmazemPagina() {
    const { itens: armazens } = useFetch("https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/armazens")
    return (
        <>
            <CadastroArmazemForm />
            <h2>Lista de Armazéns</h2>
            <table>
                <thead>
                    <tr>
                        <th>Armazém</th>
                        <th>Animal</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {armazens.map(item => {
                        return (
                            <>
                                <tr key={item.id}>
                                    <td>{item.armazem}</td>
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