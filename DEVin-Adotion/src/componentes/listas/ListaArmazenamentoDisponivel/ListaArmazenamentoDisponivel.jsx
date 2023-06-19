import { useFetch } from "../../../hooks/useFetch"
//url do fetch = mockapi pra testes
export default function ListaArmazenamentoDisponivel() {
    const { itens: armazens } = useFetch("https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/armazens")
    return (<>
        <table>
            <tr>
                <th>Armazém</th>
                <th>Animal</th>
            </tr>
            {armazens.map(item => {
                return (
                    <>
                        <tbody>
                            <tr>
                                <td>{item.armazem}</td>
                                <td>{item.animal}</td>
                            </tr>
                        </tbody>
                    </>
                )
            })}
        </table>
    </>
    )
}