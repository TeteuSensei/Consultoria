import React from "react";
import "../../css/Treino/Panturrilha.css"; // Certifique-se de criar o arquivo CSS correspondente

// Importação das imagens
import CalfRaiseFront from "./ImagensTreinos/male-bodyweight-calve-raise-front.gif";
import CalfRaiseSide from "./ImagensTreinos/male-bodyweight-calve-raise-side.gif";
import DumbbellCalfRaiseFront from "./ImagensTreinos/male-dumbbell-calf-raise-front.gif";
import DumbbellCalfRaiseSide from "./ImagensTreinos/male-dumbbell-calf-raise-side.gif";
import BarbellCalfRaiseFront from "./ImagensTreinos/male-barbell-calve-raise-front.gif";
import BarbellCalfRaiseSide from "./ImagensTreinos/male-barbell-calve-raise-side.gif";

const Panturrilha = () => {
  return (
    <div className="treino-page">
      <h1>Panturrilhas</h1>

      {/* Exercício: Calf Raises */}
      <section className="exercise">
        <h2>Elevação de Panturrilha</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={CalfRaiseFront} alt="Elevação de Panturrilha - Frente" />
          <img src={CalfRaiseSide} alt="Elevação de Panturrilha - Lado" />
        </div>
        <ol>
          <li>
            Equilibre-se sobre as pontas dos pés em uma plataforma ou placa,
            inclinando-se para frente para usar a parede como apoio.
          </li>
          <li>
            Abaixe os calcanhares em direção ao chão e pause, depois empurre-se
            através das pontas dos pés como se estivesse na ponta dos pés,
            pausando no ápice do movimento.
          </li>
          <li>Repita conforme necessário.</li>
        </ol>
      </section>

      {/* Exercício: Dumbbell Calf Raises */}
      <section className="exercise">
        <h2>Elevação de Panturrilha com Halteres</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img
            src={DumbbellCalfRaiseFront}
            alt="Elevação de Panturrilha com Halteres - Frente"
          />
          <img
            src={DumbbellCalfRaiseSide}
            alt="Elevação de Panturrilha com Halteres - Lado"
          />
        </div>
        <ol>
          <li>
            Fique em pé com os pés no chão. Você pode colocar as pontas dos pés
            em cima de uma placa para aumentar a amplitude do movimento.
          </li>
          <li>
            Imagine que tem um fio preso aos calcanhares e puxe-os para cima em
            direção ao teto.
          </li>
        </ol>
      </section>

      {/* Exercício: Barbell Calf Raises */}
      <section className="exercise">
        <h2>Elevação de Panturrilha com Barra</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img
            src={BarbellCalfRaiseFront}
            alt="Elevação de Panturrilha com Barra - Frente"
          />
          <img
            src={BarbellCalfRaiseSide}
            alt="Elevação de Panturrilha com Barra - Lado"
          />
        </div>
        <ol>
          <li>Coloque a barra sobre as costas.</li>
          <li>Comece com os pés planos no chão.</li>
          <li>
            Eleve os calcanhares para cima enquanto mantém os joelhos
            estacionários e pause na posição contraída.
          </li>
          <li>Retorne lentamente à posição inicial. Repita.</li>
        </ol>
      </section>
    </div>
  );
};

export default Panturrilha;
