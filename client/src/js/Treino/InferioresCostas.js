import React from "react";
import "../../css/Treino/InferioresCostas.css"; // Certifique-se de criar este arquivo CSS
import DeadliftFront from "./ImagensTreinos/male-barbell-deadlift-front.gif";
import DeadliftSide from "./ImagensTreinos/male-barbell-deadlift-side.gif";
import SumoDeadliftFront from "./ImagensTreinos/male-barbell-sumo-deadlift-front_aeM2BqT.gif";
import SumoDeadliftSide from "./ImagensTreinos/male-barbell-sumo-deadlift-side_av3A2PM.gif";

const InferioresCostas = () => {
  return (
    <div className="treino-page">
      <h1>Inferiores das Costas</h1>

      {/* Exercício: Deadlift */}
      <section className="exercise">
        <h2>Levantamento Terra (Deadlift)</h2>
        <p>
          <strong>Dificuldade:</strong> Avançado
        </p>
        <div className="exercise-images">
          <img src={DeadliftFront} alt="Deadlift - Frente" />
          <img src={DeadliftSide} alt="Deadlift - Lado" />
        </div>
        <ol>
          <li>
            Posicione os pés sob a barra e segure-a com as mãos afastadas na
            largura dos ombros.
          </li>
          <li>
            Flexione os joelhos e levante a barra estendendo as costas,
            mantendo-as retas.
          </li>
          <li>Erga-se completamente e segure a posição por um momento.</li>
          <li>
            Desça a barra lentamente até o chão, dobrando os joelhos e mantendo
            as costas alinhadas.
          </li>
        </ol>
      </section>

      {/* Exercício: Sumo Deadlift */}
      <section className="exercise">
        <h2>Levantamento Terra Sumo (Sumo Deadlift)</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={SumoDeadliftFront} alt="Sumo Deadlift - Frente" />
          <img src={SumoDeadliftSide} alt="Sumo Deadlift - Lado" />
        </div>
        <ol>
          <li>
            Ajuste a largura dos pés de acordo com sua preferência. Algumas
            pessoas preferem uma posição mais ampla, enquanto outras optam por
            uma mais estreita.
          </li>
          <li>
            Certifique-se de que os braços fiquem dentro das pernas e que a barra
            esteja sobre o meio do pé. Mantenha as costas retas e pressione os
            calcanhares contra o chão.
          </li>
          <li>
            Levante a barra, estendendo os joelhos e os quadris ao mesmo tempo.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default InferioresCostas;
