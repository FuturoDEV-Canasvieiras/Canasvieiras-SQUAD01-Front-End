import React, { useState, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { CadastroArmazemForm } from "../../formularios";

export default function ArmazemPagina() {
    const { itens: armazens, deleteData, updateData } = useFetch("http://localhost:3000/armazens");
    const [editingItemId, setEditingItemId] = useState(null);
    const [armazensList, setArmazensList] = useState([]);

    useEffect(() => {
        setArmazensList(armazens);
    }, [armazens]);

    function handleDelete(id) {
        setArmazensList((prevArmazens) =>
            prevArmazens.filter((item) => item.id !== id)
        );
        deleteData(id);
    }

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

    return (
        <>
            <CadastroArmazemForm />
            <h2>Lista de Armazéns</h2>
            <table>
                <thead>
                    <tr>
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
                                    <td>{item.situacao === true ? 'Disponível' : 'Indisponível'}</td>
                                    <td>
                                        {isEditing ? (
                                            <button
                                                type="button"
                                                onClick={() => handleSave(item.id)}
                                            >
                                                Salvar
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={() => handleEdit(item.id)}
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    Remover
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={4}>Nenhum armazém cadastrado ainda</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
