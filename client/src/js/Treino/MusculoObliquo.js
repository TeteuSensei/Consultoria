import React from "react";
import "../../css/Treino/MusculoObliquo.css"; // Certifique-se de criar este arquivo CSS
import RussianTwistFront from "./ImagensTreinos/male-dumbbell-russian-twist-front.gif";
import RussianTwistSide from "./ImagensTreinos/male-dumbbell-russian-twist-side.gif";

const MusculoObliquo = () => {
  return (
    <div className="treino-page">
      <h1>Oblíquos</h1>

      {/* Exercício: Russian Twist */}
      <section className="exercise">
        <h2>Russian Twist</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={RussianTwistFront} alt="Russian Twist - Frente" />
          <img src={RussianTwistSide} alt="Russian Twist - Lado" />
        </div>
        <ol>
          <li>
            Sente-se no chão com os joelhos flexionados e os quadris formando um
            ângulo de 90 graus.
          </li>
          <li>
            Seus pés devem estar levemente suspensos do chão. (Se for difícil,
            mantenha os calcanhares no chão.)
          </li>
          <li>
            Gire o tronco superior para engajar os músculos oblíquos,
            alternando os lados.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default MusculoObliquo;
