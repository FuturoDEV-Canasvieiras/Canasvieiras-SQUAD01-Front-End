import React from "react";
import Rodape from "../../rodape/rodape";
import TelaErro from "../../../imagens/tela-erro.png";

const Error = () => {
  return (
    <div className="text-center">
      <h1 style={{ fontSize: "45px" }}>Página não encontrada!</h1>
      <p>
        Voltar para a{" "}
        <a href="/">
          <strong>Página Inicial</strong>
        </a>
      </p>
      <img src={TelaErro} alt="cachorro" style={{ height: "300px" }} />
      <Rodape />
    </div>
  );
};

export default Error;
