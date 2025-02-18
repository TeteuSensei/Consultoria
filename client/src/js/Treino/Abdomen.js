import React from "react";
import "../../css/Treino/Abdomen.css"; // Certifique-se de que o arquivo CSS existe

// Importação das imagens
import CrunchesFront from "./ImagensTreinos/male-bodyweight-crunch-front.gif";
import CrunchesSide from "./ImagensTreinos/male-bodyweight-crunch-side.gif";
import LegRaisesFront from "./ImagensTreinos/male-bodyweight-leg-raises-front.gif";
import LegRaisesSide from "./ImagensTreinos/male-bodyweight-leg-raises-side.gif";
import PlankFront from "./ImagensTreinos/male-bodyweight-forearm-plank-front.gif";
import PlankSide from "./ImagensTreinos/male-bodyweight-forarm-plank-side.gif";
import RussianTwistFront from "./ImagensTreinos/male-dumbbell-russian-twist-front.gif";
import RussianTwistSide from "./ImagensTreinos/male-dumbbell-russian-twist-side.gif";

const Abdomen = () => {
  return (
    <div className="treino-page">
      <h1>Abdominais</h1>

      {/* Exercício: Crunches */}
      <section className="exercise">
        <h2>Crunches</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img className="w-100" src={CrunchesFront} alt="Crunches - Frente" />
          <img className="w-100" src={CrunchesSide} alt="Crunches - Lado" />
        </div>
        <ol>
          <li>
            Deite-se de costas com os joelhos dobrados e os pés apoiados no chão.
          </li>
          <li>Mantenha as mãos nas têmporas com os cotovelos afastados.</li>
          <li>
            Contraia o abdômen, elevando a cabeça e os ombros do chão.
          </li>
        </ol>
      </section>

      {/* Exercício: Leg Raises */}
      <section className="exercise">
        <h2>Leg Raises</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img className="w-100" src={LegRaisesFront} alt="Leg Raises - Frente" />
          <img className="w-100" src={LegRaisesSide} alt="Leg Raises - Lado" />
        </div>
        <ol>
          <li>Deite-se de costas com os braços ao lado do corpo.</li>
          <li>Mantenha as pernas juntas e tão retas quanto possível.</li>
          <li>
            Levante lentamente as pernas a um ângulo de 90° e abaixe-as devagar.
          </li>
          <li>
            Execute os movimentos de forma controlada, evitando utilizar o
            impulso.
          </li>
        </ol>
      </section>

      {/* Exercício: Plank */}
      <section className="exercise">
        <h2>Plank</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img className="w-100" src={PlankFront} alt="Plank - Frente" />
          <img className="w-100" src={PlankSide} alt="Plank - Lado" />
        </div>
        <ol>
          <li>
            Apoie os antebraços no chão com os cotovelos alinhados abaixo dos
            ombros.
          </li>
          <li>Mantenha os pés juntos, apenas os dedos dos pés tocam o chão.</li>
          <li>
            Levante o abdômen do chão formando uma linha reta dos calcanhares
            até a cabeça.
          </li>
        </ol>
      </section>

      {/* Exercício: Russian Twist */}
      <section className="exercise">
        <h2>Russian Twist</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img
            className="w-100"
            src={RussianTwistFront}
            alt="Russian Twist - Frente"
          />
          <img
            className="w-100"
            src={RussianTwistSide}
            alt="Russian Twist - Lado"
          />
        </div>
        <ol>
          <li>
            Sente-se no chão e flexione os joelhos e quadris em um ângulo de 90°.
          </li>
          <li>
            Mantenha os pés fora do chão (se for difícil, apoie os calcanhares).
          </li>
          <li>Gire o tronco para engajar os oblíquos.</li>
        </ol>
      </section>
    </div>
  );
};

export default Abdomen;
