import { useState, useEffect } from "react";


export const fetchLoginData = async (data) => {
  const response = await fetch("http://localhost:8080/usuarios/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const json = await response.json();

  return {...json, success: response.ok};
};
export const useFetch = (url) => {
  const [itens, setItens] = useState([]);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
      });
  };
  
  const createData = (body) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    .then(() => getData())
  };

  const deleteData = (id) => {
    console.log(id)
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then(() => getData());
  };

  const updateData = (body) => {
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    .then(() => getData())
  }

  const loginData = async (body) => {
    try {
      const response = await fetchLoginData(body);
      if (response.success) {
        console.log('Login bem sucedido!')
      } else {
        console.log('Credenciais inválidas.')
      }
    } catch (error) {
      console.error("Ocorreu um erro ao processar a solicitação. Error logging in:", error);
    }
  };

  useEffect(() => getData(), []);
  
  return { itens, createData, deleteData, updateData, getData, loginData };
}