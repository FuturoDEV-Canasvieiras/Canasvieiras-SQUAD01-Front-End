import React from "react";

const Home = () => {
  return (
    <div>
      <header className="text-center py-4">
        <h1 className="display-4">DEV in Adotion</h1>
        <p className="lead">
          Contribua para a alimentação de gatos e cachorros abandonados
        </p>
        <a className="btn btn-success btn-lg" href="#">
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
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
    </div>
  );
};

export default Home;
