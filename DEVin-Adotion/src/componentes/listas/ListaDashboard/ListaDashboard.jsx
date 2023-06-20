import { useFetch } from "../../../hooks/useFetch"

export default function ListaDashboard() {
    const { itens: itensDash } = useFetch("https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/cadastro_produto")
    console.log(itensDash)
    const listaGatosFilhotes = itensDash.filter((item) => item.animal == 'gato')
    console.lot(listaGatosFilhotes)
    return (
        <>
            <h2>ração filhote</h2>
        </>
    )
}