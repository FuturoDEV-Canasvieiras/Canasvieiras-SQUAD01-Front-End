import { useFetch } from "../../../hooks/useFetch";

export default function ListaDashboard() {
  const { itens: itensDash, error } = useFetch("https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/cadastro_produto");
    console.log(itensDash)
  if (error) {
    return <div>Erro ao carregar os dados do dashboard</div>;
  }

  const calcularTotalPorProdutoCategoria = (produto, categoria, animal) => {
    return itensDash.reduce((total, item) => {
      if (item.produto === produto && item.categoria === categoria && item.animal === animal) {
        return total + Number(item.quantidade);
      }
      return total;
    }, 0);
  };

  const totalAntiparasitarioGatoAdulto = calcularTotalPorProdutoCategoria('antiparasitario', 'adulto', 'Gato');
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
  const totalRacaoCachorroFilhote = calcularTotalPorProdutoCategoria('racao', 'filhote', 'Cachorro');

  return (
    <>
      <p>Antiparasitário para gato adulto: {totalAntiparasitarioGatoAdulto}</p>
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
      <p>Ração para cachorro filhote: {totalRacaoCachorroFilhote}</p>
    </>
  );
}
