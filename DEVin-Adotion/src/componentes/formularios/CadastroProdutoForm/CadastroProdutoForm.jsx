import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { useForm } from '../../../hooks/useForm';
export default function CadastroProdutoForm() {
  const { handleChange, form, resetForm } = useForm(
    {
      produto: "",
      quantidade: 0,
      animal: "",
      categoria: "",
      armazem:
      {
        id: 0
      }
    }
  );
  const { createData } = useFetch('http://localhost:8080/estoque/cadastro');
  const { itens: armazens, error } = useFetch('http://localhost:8080/armazem');
  const [selectedArmazem, setSelectedArmazem] = useState(null);

  useEffect(() => {
    armazensAbertos();
  }, []);

  const armazensAbertos = () => {
    if (!error && armazens) {
      const armazensDisponiveis = armazens.filter((item) => item.situacao === true);
      return armazensDisponiveis;
    }
    return [];
  };

  const handleArmazemChange = (event) => {
    const selectedArmazem = armazens.find((item) => item.id == event.target.value);
    setSelectedArmazem(selectedArmazem);
    handleChange(event);
  };

  const handleAnimalChange = (event) => {
    handleChange(event);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createData(convertToJSON());
    resetForm();
  };

  const convertToJSON = () => {
    const { produto, quantidade, animal, categoria, armazem } = form;
    return {
      produto,
      quantidade,
      animal,
      categoria,
      armazem: {
        id: armazem
      }
    };
  };
  
  return (
    <>
      <h1>Cadastro Estoque</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='armazem'>Armazenamento:</label><br />
        <select name='armazem' value={form.armazem} onChange={handleArmazemChange}>
          <option value="" disabled>Selecione o Armazém</option>
          {armazensAbertos().map((item) => {
            return (
              <option key={item.id} value={item.id}>{item.nome}</option>
            );
          })}
        </select><br />
        <label htmlFor='produto'>Produto:</label><br />
        <select name='produto' value={form.produto} onChange={handleChange}>
          <option value="" disabled>Selecione o Produto</option>
          <option value="racao">Ração</option>
          <option value="antiparasitario">Antiparasitário</option>
          <option value="antipulgas">Antipulgas</option>
        </select><br />
        <label htmlFor='quantidade'>Quantidade:</label><br />
        <input type="number" name="quantidade" value={form.quantidade} onChange={handleChange} /><br />
        <label htmlFor='animal'>Animal:</label><br />
        <select name='animal' value={form.animal} onChange={handleAnimalChange}>
          <option value="" disabled>Selecione o Animal</option>
          {selectedArmazem && <option value={selectedArmazem.animal}>{selectedArmazem.animal}</option>}
        </select><br />
        <label htmlFor='categoria'>Categoria:</label><br />
        <select name='categoria' value={form.categoria} onChange={handleChange}>
          <option value="" disabled>Selecione a Categoria</option>
          <option value="adulto">Adulto</option>
          <option value="filhote">Filhote</option>
        </select><br />
        <button type="submit" className="button-form">Cadastrar</button>
      </form>
    </>
  );
}