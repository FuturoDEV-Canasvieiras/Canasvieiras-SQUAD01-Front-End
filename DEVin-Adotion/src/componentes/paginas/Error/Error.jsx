import React from "react";
import Rodape from "../../rodape/rodape";

const Error = () => {
  return (
    <div className="full-height d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-white text-shadow p-2">
        Hmm.. parece que você está perdido!
      </h1>
      <a href="/">
        <h5 className="text-center text-white text-shadow border border-white rounded p-3">
          Voltar para a página inicial
        </h5>
      </a>
      <Rodape />
    </div>
  );
};

export default Error;
