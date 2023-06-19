import { useFetch } from "../../../hooks/useFetch"

export default function ListaArmazenamentoDisponivel() {
    const { itens: armazens } = useFetch("https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/armazens")
    return (
        <section>
            {armazens.map(item => {
                return (
                    <list>
                        <ul>
                            <p>nome do armazem</p>
                            {item.armazem}
                            <p>animal</p>
                            {item.animal}
                        </ul>
                    </list>
                )
            })}
        </section>
    )
}