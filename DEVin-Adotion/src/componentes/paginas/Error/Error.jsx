import React from "react";

const Error = () => {
  return (
    <div>
      <h1 className="mt-5 text-center">Hm...você está tentando</h1>
      <h2 className="mb-4 text-center">acessar uma página que não existe!</h2>
      <p className="text-center">
        Voltar para a{" "}
        <a href="/">
          <strong>página inicial</strong>
        </a>
      </p>
    </div>
  );
};

export default Error;
