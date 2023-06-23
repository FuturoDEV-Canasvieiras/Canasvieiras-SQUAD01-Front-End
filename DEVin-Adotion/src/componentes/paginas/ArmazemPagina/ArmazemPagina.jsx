import React, { useState, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { CadastroArmazemForm } from "../../formularios";

export default function ArmazemPagina() {
    const { itens: armazens, updateData } = useFetch("http://localhost:8080/armazem");
    const [editingItemId, setEditingItemId] = useState(null);
    const [armazensList, setArmazensList] = useState([]);

    useEffect(() => {
        setArmazensList(armazens);
    }, [armazens]);

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
        setArmazensList((prevArmazens) =>
            prevArmazens.map((item) =>
                item.id === id ? { ...item, situacao: !item.situacao } : item
            )
        );
        const armazem = armazensList.find((item) => item.id === id);
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
                                    <td>
                                        {item.situacao ? "Disponivel" : "Indisponivel"}
                                    </td>
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
                                                {item.situacao === true ? (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleToggleStatus(item.id)}
                                                    >
                                                        Desativar
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        disabled
                                                    >
                                                        Desativar
                                                    </button>
                                                )
                                                }
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
