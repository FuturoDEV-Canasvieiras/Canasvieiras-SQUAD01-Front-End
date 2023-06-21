import { useFetch } from "../../../hooks/useFetch";

export default function ListaDashboard() {

    const animalCategoria = (animal, categoria) => {
        const { itens: itensDash, error } = useFetch(`http://127.0.0.1:8080/estatisticas/${animal}/${categoria}`);
        if (error) {
            return <div>Erro ao carregar os dados do dashboard</div>;
        } else {
            return (
                <>
                    <p>Total de Itens: {itensDash.total}</p>
                    <p>Antipulgas: {itensDash.totalComAntipulgas}</p>
                    <p>Antiparasitário: {itensDash.totalComAntiparasitario}</p>
                    <p>Kg de Ração: {itensDash.mediaRacao}</p>
                </>
            )
        }
    }
    return (
        <>
            <p>Gato Adulto:</p><br />
            <div>{animalCategoria('gato', 'adulto')}</div>
            <p>Gato Filhote:</p><br />
            <div>{animalCategoria('gato', 'filhote')}</div>
            <p>Cachorro Adulto:</p><br />
            <div>{animalCategoria('cachorro', 'adulto')}</div>
            <p>Cachorro Filhote:</p><br />
            <div>{animalCategoria('cachorro', 'filhote')}</div>
        </>
    );
}
