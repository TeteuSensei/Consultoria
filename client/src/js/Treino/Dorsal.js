import React from "react";
import "../../css/Treino/Dorsal.css"; // Certifique-se de criar este arquivo CSS
import PullUpFront from "./ImagensTreinos/male-bodyweight-pullup-front.gif";
import PullUpSide from "./ImagensTreinos/male-bodyweight-pullup-side.gif";
import DumbbellRowFront from "./ImagensTreinos/male-dumbbell-row-unilateral-front.gif";
import DumbbellRowSide from "./ImagensTreinos/male-dumbbell-unilateral-row-side.gif";
import DeadliftFront from "./ImagensTreinos/male-barbell-deadlift-front.gif";
import DeadliftSide from "./ImagensTreinos/male-barbell-deadlift-side.gif";

const Dorsal = () => {
  return (
    <div className="treino-page">
      <h1>Dorsais</h1>

      {/* Exercício: Pull Ups */}
      <section className="exercise">
        <h2>Barra Fixa (Pull Ups)</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={PullUpFront} alt="Pull Ups - Frente" />
          <img src={PullUpSide} alt="Pull Ups - Lado" />
        </div>
        <ol>
          <li>Segure a barra com as mãos em pegada pronada e os braços estendidos.</li>
          <li>Puxe o corpo para cima até que o queixo fique acima da barra.</li>
          <li>Desça lentamente até a posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Dumbbell Row Unilateral */}
      <section className="exercise">
        <h2>Remada Unilateral com Halter</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={DumbbellRowFront} alt="Dumbbell Row - Frente" />
          <img src={DumbbellRowSide} alt="Dumbbell Row - Lado" />
        </div>
        <ol>
          <li>Apoie o braço livre em uma superfície estável, como um banco, mantendo a perna oposta recuada.</li>
          <li>Mantenha o tronco paralelo ao chão para maximizar o alcance do movimento.</li>
          <li>Puxe o cotovelo para trás como se estivesse segurando uma bola de tênis na axila e pressione-a em cada repetição.</li>
        </ol>
      </section>

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
          <li>Posicione os pés sob a barra e segure-a com as mãos afastadas na largura dos ombros.</li>
          <li>Flexione os joelhos e levante a barra estendendo as costas, mantendo-a reta durante o movimento.</li>
          <li>Erga-se completamente e segure a posição por um momento.</li>
          <li>Desça a barra lentamente até o chão, dobrando os joelhos e mantendo as costas alinhadas.</li>
        </ol>
      </section>
    </div>
  );
};

export default Dorsal;
