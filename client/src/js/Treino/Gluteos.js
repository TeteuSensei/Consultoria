import React from "react";
import "../../css/Treino/Gluteos.css"; // Certifique-se de criar este arquivo CSS
import SquatFront from "./ImagensTreinos/male-bodyweight-squat-front.gif";
import SquatSide from "./ImagensTreinos/male-bodyweight-squat-side.gif";
import ForwardLungeFront from "./ImagensTreinos/male-bodyweight-forward-lunge-front.gif";
import ForwardLungeSide from "./ImagensTreinos/male-bodyweight-forward-lunge-side.gif";
import GluteBridgeFront from "./ImagensTreinos/male-bodyweight-glute-bridge-front.gif";
import GluteBridgeSide from "./ImagensTreinos/male-bodyweight-glute-bridge-side.gif";
import GobletSquatFront from "./ImagensTreinos/male-dumbbell-goblet-squat-front.gif";
import GobletSquatSide from "./ImagensTreinos/male-dumbbell-goblet-squat-side.gif";
import BarbellSquatFront from "./ImagensTreinos/male-barbell-highbar-squat-front.gif";
import BarbellSquatSide from "./ImagensTreinos/male-barbell-highbar-squat-side_bU7Qudy.gif";

const Gluteos = () => {
  return (
    <div className="treino-page">
      <h1>Glúteos</h1>

      {/* Exercício: Squats */}
      <section className="exercise">
        <h2>Agachamento (Squats)</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={SquatFront} alt="Squats - Frente" />
          <img src={SquatSide} alt="Squats - Lado" />
        </div>
        <ol>
          <li>Fique de pé com os pés na largura dos ombros.</li>
          <li>Flexione os joelhos e quadris e sente-se no agachamento enquanto abaixa o corpo.</li>
          <li>Continue descendo até alcançar a profundidade total.</li>
          <li>Retorne à posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Forward Lunges */}
      <section className="exercise">
        <h2>Passada à Frente (Forward Lunges)</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={ForwardLungeFront} alt="Forward Lunges - Frente" />
          <img src={ForwardLungeSide} alt="Forward Lunges - Lado" />
        </div>
        <ol>
          <li>Dê um passo à frente com uma perna.</li>
          <li>Abaixe o corpo até que o joelho traseiro quase toque o chão.</li>
          <li>Certifique-se de manter o tronco ereto e o joelho da frente alinhado com o pé da frente.</li>
          <li>Empurre o chão com o pé da frente até retornar à posição inicial. Alterne as pernas.</li>
        </ol>
      </section>

      {/* Exercício: Glute Bridge */}
      <section className="exercise">
        <h2>Ponte de Glúteos (Glute Bridge)</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={GluteBridgeFront} alt="Glute Bridge - Frente" />
          <img src={GluteBridgeSide} alt="Glute Bridge - Lado" />
        </div>
        <ol>
          <li>Deite-se com os joelhos dobrados e os pés apoiados no chão.</li>
          <li>Empurre os quadris para cima, elevando os glúteos e mantendo as costas retas.</li>
          <li>Contraia os glúteos e levante os quadris em direção ao teto.</li>
          <li>Segure a posição por alguns segundos no ponto mais alto e, em seguida, retorne lentamente à posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Dumbbells Goblet Squats */}
      <section className="exercise">
        <h2>Agachamento com Halteres (Goblet Squats)</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={GobletSquatFront} alt="Goblet Squats - Frente" />
          <img src={GobletSquatSide} alt="Goblet Squats - Lado" />
        </div>
        <ol>
          <li>Segure o peso próximo ao peito, mantendo os cotovelos para dentro.</li>
          <li>Abaixe-se no agachamento, mantendo os cotovelos alinhados com os joelhos.</li>
          <li>Empurre pelos calcanhares enquanto mantém o peito erguido e volte à posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Barbell Squats */}
      <section className="exercise">
        <h2>Agachamento com Barra (Barbell Squats)</h2>
        <p>
          <strong>Dificuldade:</strong> Avançado
        </p>
        <div className="exercise-images">
          <img src={BarbellSquatFront} alt="Barbell Squats - Frente" />
          <img src={BarbellSquatSide} alt="Barbell Squats - Lado" />
        </div>
        <ol>
          <li>Fique de pé com os pés na largura dos ombros. Mantenha a curvatura natural das costas.</li>
          <li>Segure a barra sobre os ombros e apoie-a na parte superior das costas. Desencaixe a barra estendendo as pernas e dê um passo para trás.</li>
          <li>Flexione os joelhos até que os quadris fiquem abaixo da linha dos joelhos.</li>
          <li>Retorne à posição inicial, empurrando com as pernas e expirando no topo.</li>
        </ol>
      </section>
    </div>
  );
};

export default Gluteos;
