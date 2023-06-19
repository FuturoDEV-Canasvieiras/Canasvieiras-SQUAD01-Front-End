import { useFetch } from "../../../hooks/useFetch"

export default function ListaDashboard() {
    const { itens: itensDash } = useFetch("https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/cadastro_produto")
    return (
        <>
            <h2>ração filhote</h2>
            {itensDash
            .map((item) => {item.animal})
            .filter((item) => item === 'Gato' ? <p>{item}</p> : null)
            }        
        </>
    )
}