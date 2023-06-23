import { useState, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { CadastroArmazemForm } from "../../formularios";

export default function ArmazemPagina() {
  const { itens: armazens, updateData } = useFetch("http://localhost:8080/armazem");
  const { itens: produtos } = useFetch("http://localhost:8080/estoque");
  const [produtosList, setProdutosList] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [armazensList, setArmazensList] = useState([]);

  useEffect(() => {
    setArmazensList(armazens);
    setProdutosList(produtos);
  }, [armazens, produtos]);

  function handleEdit(id) {
    setEditingItemId(id);
  }

  function handleSave(id) {
    const nomeElement = document.getElementById(`nome-${id}`);
    const animalElement = document.getElementById(`animal-${id}`);
    const armazem = armazensList.find((item) => item.id === id);
    const updatedArmazem = {
      ...armazem,
      nome: nomeElement.value,
      animal: animalElement.value,
    };
    updateData(id, updatedArmazem)
      .then(() => {
        setEditingItemId(null);
        setArmazensList((prevArmazens) =>
          prevArmazens.map((item) =>
            item.id === id ? { ...item, ...updatedArmazem } : item
          )
        );
      })
      .catch((error) => {
        console.error("Erro ao atualizar o item:", error);
      });
  }

  function handleToggleStatus(id) {
    const armazem = armazensList.find((item) => item.id === id);
    const hasProducts = produtosList.some(
      (item) => item.armazem && item.armazem.id === id
    );

    if (hasProducts) {
      alert("Não é possível desativar o armazém. Existem produtos vinculados a ele.");
      return;
    }

    setArmazensList((prevArmazens) =>
      prevArmazens.map((item) =>
        item.id === id ? { ...item, situacao: !item.situacao } : item
      )
    );

    const updatedArmazem = {
      ...armazem,
      situacao: !armazem.situacao,
    };

    updateData(`desativar/${id}`, updatedArmazem)
      .catch((error) => {
        console.error("Erro ao atualizar o item:", error);
      });
  }

  return (
    <>
      <CadastroArmazemForm />
      <h2>Lista de Armazéns</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Armazém</th>
            <th>Animal</th>
            <th>Situação</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {armazensList ? (
            armazensList.map((item) => {
              const isEditing = item.id === editingItemId;

              return (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  {isEditing ? (
                    <td>
                      <input
                        id={`nome-${item.id}`}
                        defaultValue={item.nome}
                        type="text"
                      />
                    </td>
                  ) : (
                    <td>{item.nome}</td>
                  )}
                  {isEditing ? (
                    <td>
                      <select
                        id={`animal-${item.id}`}
                        defaultValue={item.animal}
                      >
                        <option value="gato">Gato</option>
                        <option value="cachorro">Cachorro</option>
                      </select>
                    </td>
                  ) : (
                    <td>{item.animal}</td>
                  )}
                  <td>{item.situacao ? "Disponivel" : "Indisponivel"}</td>
                  <td>
                    {isEditing ? (
                      <button type="button" onClick={() => handleSave(item.id)}>
                        Salvar
                      </button>
                    ) : (
                      <>
                        <button type="button" onClick={() => handleEdit(item.id)}>
                          Editar
                        </button>
                        {item.situacao === true ? (
                          <button
                            type="button"
                            onClick={() => handleToggleStatus(item.id)}
                          >
                            Desativar
                          </button>
                        ) : (
                          <button type="button" disabled>
                            Desativar
                          </button>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>Nenhum armazém cadastrado ainda</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
