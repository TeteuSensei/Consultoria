import React from "react";
import "../../css/Treino/Peito.css"; // Certifique-se de criar o arquivo CSS correspondente

// Importação das imagens
import PushUpFront from "./ImagensTreinos/male-bodyweight-pushup-front.gif";
import PushUpSide from "./ImagensTreinos/male-bodyweight-pushup-side.gif";
import InclinePushUpFront from "./ImagensTreinos/male-bodyweight-incline-pushup-front.gif";
import InclinePushUpSide from "./ImagensTreinos/male-bodyweight-incline-pushup-side.gif";
import ChestFlyFront from "./ImagensTreinos/male-dumbbell-incline-chest-flys-front.gif";
import ChestFlySide from "./ImagensTreinos/male-dumbbell-incline-chest-flys-side.gif";
import BenchPressFront from "./ImagensTreinos/male-dumbbell-incline-bench-press-front.gif";
import BenchPressSide from "./ImagensTreinos/male-dumbbell-incline-bench-press-side.gif";
import BarbellPressFront from "./ImagensTreinos/male-barbell-bench-press-front_C2G7O8r.gif";
import BarbellPressSide from "./ImagensTreinos/male-barbell-bench-press-side_giVNk12.gif";
import InclineBarbellFront from "./ImagensTreinos/male-barbell-incline-bench-press-front.gif";
import InclineBarbellSide from "./ImagensTreinos/male-barbell-incline-bench-press-side.gif";

const Peito = () => {
  return (
    <div className="treino-page">
      <h1>Peito</h1>

      {/* Exercício: Push Up */}
      <section className="exercise">
        <h2>Flexão de Braço</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={PushUpFront} alt="Flexão de Braço - Frente" />
          <img src={PushUpSide} alt="Flexão de Braço - Lado" />
        </div>
        <ol>
          <li>Coloque as mãos firmemente no chão, diretamente abaixo dos ombros.</li>
          <li>Mantenha as costas retas e abaixe lentamente o corpo.</li>
          <li>
            Puxe as escápulas para trás e para baixo, mantendo os cotovelos
            próximos ao corpo.
          </li>
          <li>Expire enquanto empurra de volta para a posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Incline Push Ups */}
      <section className="exercise">
        <h2>Flexão Inclinação</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={InclinePushUpFront} alt="Flexão Inclinação - Frente" />
          <img src={InclinePushUpSide} alt="Flexão Inclinação - Lado" />
        </div>
        <ol>
          <li>Fique de frente para um banco ou plataforma elevada estável.</li>
          <li>Coloque as mãos na borda do banco, ligeiramente mais largas que a largura dos ombros.</li>
          <li>Baixe o corpo lentamente até que o peito quase toque o banco.</li>
          <li>Empurre o corpo para cima até que os braços estejam estendidos.</li>
        </ol>
      </section>

      {/* Exercício: Dumbbell Incline Chest Flys */}
      <section className="exercise">
        <h2>Abertura com Halteres</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={ChestFlyFront} alt="Abertura com Halteres - Frente" />
          <img src={ChestFlySide} alt="Abertura com Halteres - Lado" />
        </div>
        <ol>
          <li>Deite-se em um banco inclinado e posicione os pés no chão.</li>
          <li>
            Comece o exercício com os halteres juntos acima do peito, com os
            cotovelos levemente dobrados.
          </li>
          <li>Simultaneamente, abaixe os pesos para os lados.</li>
          <li>
            Pause quando os pesos estiverem paralelos ao banco, depois levante os braços de volta à posição inicial.
          </li>
        </ol>
      </section>

      {/* Exercício: Dumbbell Bench Press */}
      <section className="exercise">
        <h2>Supino com Halteres</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={BenchPressFront} alt="Supino com Halteres - Frente" />
          <img src={BenchPressSide} alt="Supino com Halteres - Lado" />
        </div>
        <ol>
          <li>Levante o banco para um ângulo de 30 a 45 graus.</li>
          <li>Deite-se no banco e posicione os pés no chão.</li>
          <li>
            Levante os halteres com os braços estendidos e abaixe lentamente até a largura dos ombros.
          </li>
          <li>Levante-os novamente até que os braços estejam estendidos na posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Barbell Bench Press */}
      <section className="exercise">
        <h2>Supino com Barra</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={BarbellPressFront} alt="Supino com Barra - Frente" />
          <img src={BarbellPressSide} alt="Supino com Barra - Lado" />
        </div>
        <ol>
          <li>Deite-se no banco com os pés no chão. Com os braços estendidos, retire a barra do suporte.</li>
          <li>Abaixe a barra até o meio do peito.</li>
          <li>Levante a barra até que os cotovelos estejam travados.</li>
        </ol>
      </section>

      {/* Exercício: Incline Barbell Bench Press */}
      <section className="exercise">
        <h2>Supino Inclinado com Barra</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={InclineBarbellFront} alt="Supino Inclinado com Barra - Frente" />
          <img src={InclineBarbellSide} alt="Supino Inclinado com Barra - Lado" />
        </div>
        <ol>
          <li>Posicione o banco entre 30 e 45 graus.</li>
          <li>Deite-se no banco com os pés no chão. Com os braços estendidos, retire a barra do suporte.</li>
          <li>Abaixe a barra até o meio do peito.</li>
          <li>Levante a barra lentamente e de forma controlada até travar os cotovelos.</li>
        </ol>
      </section>
    </div>
  );
};

export default Peito;
