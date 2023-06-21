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

    //   const calcularTotalPorProdutoCategoria = (produto, categoria, animal) => {
    //     return itensDash.reduce((total, item) => {
    //       if (item.produto === produto && item.categoria === categoria && item.animal === animal) {
    //         return total + Number(item.quantidade);
    //       }
    //       return total;
    //     }, 0);
    //   };

    /*   const totalAntiparasitarioGatoAdulto = calcularTotalPorProdutoCategoria('antiparasitario', 'adulto', 'Gato');
      const totalAntiparasitarioGatoFilhote = calcularTotalPorProdutoCategoria('antiparasitario', 'filhote', 'Gato');
      const totalAntiparasitarioCachorroAdulto = calcularTotalPorProdutoCategoria('antiparasitario', 'adulto', 'Cachorro');
      const totalAntiparasitarioCachorroFilhote = calcularTotalPorProdutoCategoria('antiparasitario', 'filhote', 'Cachorro');
    
      const totalAntipulgaGatoAdulto = calcularTotalPorProdutoCategoria('antipulga', 'adulto', 'Gato');
      const totalAntipulgaGatoFilhote = calcularTotalPorProdutoCategoria('antipulga', 'filhote', 'Gato');
      const totalAntipulgaCachorroAdulto = calcularTotalPorProdutoCategoria('antipulga', 'adulto', 'Cachorro');
      const totalAntipulgaCachorroFilhote = calcularTotalPorProdutoCategoria('antipulga', 'filhote', 'Cachorro');
    
      const totalRacaoGatoAdulto = calcularTotalPorProdutoCategoria('racao', 'adulto', 'Gato');
      const totalRacaoGatoFilhote = calcularTotalPorProdutoCategoria('racao', 'filhote', 'Gato');
      const totalRacaoCachorroAdulto = calcularTotalPorProdutoCategoria('racao', 'adulto', 'Cachorro');
      const totalRacaoCachorroFilhote = calcularTotalPorProdutoCategoria('racao', 'filhote', 'Cachorro'); */

    return (
        <>
            <p>Gato Adulto:</p><br />
            <div>{animalCategoria(gato, adulto)}</div>
            <p>Gato Filhote:</p><br />
            <div>{animalCategoria(gato, filhote)}</div>
            <p>Cachorro Adulto:</p><br />
            <div>{animalCategoria(cachorro, adulto)}</div>
            <p>Cachorro Filhote:</p><br />
            <div>{animalCategoria(cachorro, filhote)}</div>
            {/* <p>Antiparasitário para gato adulto: {totalAntiparasitarioGatoAdulto}</p>
      <p>Antiparasitário para gato filhote: {totalAntiparasitarioGatoFilhote}</p>
      <p>Antiparasitário para cachorro adulto: {totalAntiparasitarioCachorroAdulto}</p>
      <p>Antiparasitário para cachorro filhote: {totalAntiparasitarioCachorroFilhote}</p>
      <p>Antipulga para gato adulto: {totalAntipulgaGatoAdulto}</p>
      <p>Antipulga para gato filhote: {totalAntipulgaGatoFilhote}</p>
      <p>Antipulga para cachorro adulto: {totalAntipulgaCachorroAdulto}</p>
      <p>Antipulga para cachorro filhote: {totalAntipulgaCachorroFilhote}</p>
      <p>Ração para gato adulto: {totalRacaoGatoAdulto}</p>
      <p>Ração para gato filhote: {totalRacaoGatoFilhote}</p>
      <p>Ração para cachorro adulto: {totalRacaoCachorroAdulto}</p>
      <p>Ração para cachorro filhote: {totalRacaoCachorroFilhote}</p> */}
        </>
    );
}
