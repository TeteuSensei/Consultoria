import React from "react";
import "../../css/Treino/Quadriceps.css"; // Certifique-se de criar este arquivo CSS
import SquatsFront from "./ImagensTreinos/male-bodyweight-squat-front.gif";
import SquatsSide from "./ImagensTreinos/male-bodyweight-squat-side.gif";
import LungesFront from "./ImagensTreinos/male-bodyweight-forward-lunge-front.gif";
import LungesSide from "./ImagensTreinos/male-bodyweight-forward-lunge-side.gif";
import BulgarianFront from "./ImagensTreinos/male-bodyweight-bulgarian-split-squat-front.gif";
import BulgarianSide from "./ImagensTreinos/male-bodyweight-bulgarian-split-squat-side.gif";
import GobletFront from "./ImagensTreinos/male-dumbbell-goblet-squat-front.gif";
import GobletSide from "./ImagensTreinos/male-dumbbell-goblet-squat-side.gif";
import BarbellFront from "./ImagensTreinos/male-barbell-highbar-squat-front.gif";
import BarbellSide from "./ImagensTreinos/male-barbell-highbar-squat-side_bU7Qudy.gif";

const Quadriceps = () => {
  return (
    <div className="treino-page">
      <h1>Quadríceps</h1>

      {/* Exercício: Squats */}
      <section className="exercise">
        <h2>Agachamento (Squats)</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={SquatsFront} alt="Agachamento - Frente" />
          <img src={SquatsSide} alt="Agachamento - Lado" />
        </div>
        <ol>
          <li>Fique em pé com os pés afastados na largura dos ombros.</li>
          <li>
            Flexione os joelhos e quadris e sente-se para trás, descendo o corpo.
          </li>
          <li>Continue até atingir a profundidade completa.</li>
          <li>Retorne à posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Forward Lunges */}
      <section className="exercise">
        <h2>Avanço (Forward Lunges)</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={LungesFront} alt="Avanço - Frente" />
          <img src={LungesSide} alt="Avanço - Lado" />
        </div>
        <ol>
          <li>Dê um passo à frente com uma das pernas.</li>
          <li>
            Abaixe o corpo até que o joelho de trás quase toque o chão.
          </li>
          <li>
            Certifique-se de manter o corpo ereto e o joelho da frente alinhado
            com o pé.
          </li>
          <li>Empurre o chão com o pé da frente para retornar à posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Bulgarian Split Squats */}
      <section className="exercise">
        <h2>Agachamento Búlgaro (Bulgarian Split Squats)</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={BulgarianFront} alt="Agachamento Búlgaro - Frente" />
          <img src={BulgarianSide} alt="Agachamento Búlgaro - Lado" />
        </div>
        <ol>
          <li>
            Fique de costas para um banco (ou superfície elevada) e coloque um
            dos pés no banco.
          </li>
          <li>
            Agache até que a perna da frente fique paralela ao chão.
          </li>
          <li>
            Volte à posição inicial. Após completar as repetições desejadas,
            troque de perna.
          </li>
        </ol>
      </section>

      {/* Exercício: Dumbbell Goblet Squats */}
      <section className="exercise">
        <h2>Agachamento Goblet (Dumbbells Goblet Squats)</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={GobletFront} alt="Agachamento Goblet - Frente" />
          <img src={GobletSide} alt="Agachamento Goblet - Lado" />
        </div>
        <ol>
          <li>
            Segure o peso próximo ao peito, com os cotovelos voltados para dentro.
          </li>
          <li>
            Abaixe-se no agachamento, mantendo os cotovelos dentro do alinhamento
            dos joelhos.
          </li>
          <li>
            Empurre os calcanhares, mantendo o peito erguido, para retornar à
            posição inicial.
          </li>
        </ol>
      </section>

      {/* Exercício: Barbell Squats */}
      <section className="exercise">
        <h2>Agachamento com Barra (Barbell Squats)</h2>
        <p>
          <strong>Dificuldade:</strong> Avançado
        </p>
        <div className="exercise-images">
          <img src={BarbellFront} alt="Agachamento com Barra - Frente" />
          <img src={BarbellSide} alt="Agachamento com Barra - Lado" />
        </div>
        <ol>
          <li>
            Fique em pé com os pés afastados na largura dos ombros. Mantenha a
            curvatura natural das costas.
          </li>
          <li>
            Apoie a barra nos ombros e segure-a com firmeza. Desengate a barra,
            estendendo as pernas, e dê um passo para trás.
          </li>
          <li>
            Dobre os joelhos para abaixar o peso, mantendo a postura correta, até
            que os quadris fiquem abaixo dos joelhos.
          </li>
          <li>
            Levante a barra de volta à posição inicial, usando as pernas, e
            expire no topo.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Quadriceps;
