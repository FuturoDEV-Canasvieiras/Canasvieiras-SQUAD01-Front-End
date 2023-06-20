import React from "react";
import Navbar from "../Navbar/Navbar";

import ImagemCachorroAdocao from "../../../imagens/cachorro-adocao.jpg";
import Filhotes from "../../../imagens/filhotes.jpg";
import Pessoa from "../../../imagens/pessoa.jpg";
const Home = () => {
  return (
    <div>
      <header className="text-center py-4">
        <h1 className="display-4">DEV in Adotion</h1>
        <p className="lead">
          Contribua para a alimentação de gatos e cachorros abandonados
        </p>
        <a className="btn btn-success btn-lg" href="/login">
          Faça sua doação
        </a>
      </header>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Jsj-hDW9bS8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <section className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Sobre Nós</h2>
            <p>
              Somos uma ONG dedicada a ajudar gatos e cachorros em situação de
              abandono. Nosso objetivo é garantir que esses animais tenham uma
              alimentação adequada enquanto aguardam por um novo lar.
              Trabalhamos em parceria com pet shops, clínicas veterinárias e
              doadores para coletar alimentos e redistribuí-los de forma justa.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Como Funciona</h2>
            <p>
              Recebemos doações de alimentos para gatos e cachorros de
              diferentes marcas e tipos. Nossa equipe faz a triagem dos
              alimentos e os redistribui para abrigos, protetores independentes
              e famílias temporárias que cuidam dos animais em transição. Além
              disso, também realizamos feiras de adoção e promovemos campanhas
              de conscientização sobre a posse responsável.
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <h2>Como Você Pode Ajudar</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src={Filhotes}
                className="card-img-top"
                alt="Filhotes de cães"
              />
              <div className="card-body">
                <h5 className="card-title">Faça uma Doação</h5>
                <p className="card-text">
                  Sua doação de alimentos para gatos e cachorros faz a diferença
                  na vida desses animais. Ajude-nos a garantir que eles tenham
                  uma alimentação adequada enquanto esperam por um novo lar.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src={Pessoa}
                className="card-img-top"
                alt="Voluntária alimentando dois cães"
              />
              <div className="card-body">
                <h5 className="card-title">Seja um Voluntário</h5>
                <p className="card-text">
                  Junte-se a nós como voluntário e faça parte da equipe que
                  ajuda a alimentar gatos e cachorros abandonados. Temos
                  diversas atividades e projetos em que você pode se envolver.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src={ImagemCachorroAdocao}
                className="card-img-top"
                alt="Cachorro"
              />
              <div className="card-body">
                <h5 className="card-title">Adote um Animal</h5>
                <p className="card-text">
                  Considere adotar um gato ou cachorro em busca de um lar
                  amoroso. Temos animais resgatados que estão à procura de uma
                  família. A adoção é um gesto de amor e responsabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
