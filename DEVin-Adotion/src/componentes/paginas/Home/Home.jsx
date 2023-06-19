import React from "react";
import Navbar from "../../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <h1 className="mt-5">LAB Cat&amp;Dog</h1>
      <h2 className="mb-4">Desenvolvimento de Aplicações</h2>
      <div className="row">
        <div className="col-md-6">
          <img src="/" alt="Cachorro" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <img src="/" alt="Gato" className="img-fluid" />
        </div>
      </div>
      <p>
        A LAB Cat&amp;Dog é uma empresa especializada em desenvolvimento de
        aplicações que está buscando expandir seus negócios. Atualmente, estamos
        focados no desenvolvimento de uma aplicação para controle de estoque de
        materiais para ONGs.
      </p>
      <p>
        Para isso, estamos contratando novos desenvolvedores para o nosso quadro
        de colaboradores. Antes de finalizar as contratações, queremos avaliar
        suas habilidades e conhecimentos através de um desafio prático. O
        objetivo é criar um sistema de controle de estoque chamado
        DEVin-Adoption.
      </p>
      <p>
        Parabéns! Você foi escolhido para criar o DEVin-Adoption. Utilize a
        biblioteca React com Vite para desenvolver o sistema. Tenha em mente que
        a aplicação precisa ser responsiva e ter uma interface intuitiva para
        facilitar o controle de estoque das ONGs.
      </p>
      <p>
        Aproveite essa oportunidade para demonstrar suas habilidades e destacar
        seu potencial como desenvolvedor. Estamos ansiosos para ver o seu
        trabalho!
      </p>
    </div>
  );
};

export default Home;
