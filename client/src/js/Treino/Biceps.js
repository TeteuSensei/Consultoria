import React from "react";
import "../../css/Treino/Biceps.css"; // Certifique-se de que o arquivo CSS existe

// Importação das imagens
import ChinUpsFront from "./ImagensTreinos/male-bodyweight-chinup-front.gif";
import ChinUpsSide from "./ImagensTreinos/male-bodyweight-chinup-side.gif";
import DumbbellCurlFront from "./ImagensTreinos/male-dumbbell-curl-front.gif";
import DumbbellCurlSide from "./ImagensTreinos/male-dumbbell-curl-side.gif";
import HammerCurlFront from "./ImagensTreinos/male-dumbbell-hammer-curl-front_JbvhNLU.gif";
import HammerCurlSide from "./ImagensTreinos/male-dumbbell-hammer-curl-side_io6oHN7.gif";
import ReverseCurlFront from "./ImagensTreinos/male-dumbbell-reverse-curl-front.gif";
import ReverseCurlSide from "./ImagensTreinos/male-dumbbell-reverse-curl-side.gif";
import BarbellCurlFront from "./ImagensTreinos/male-barbell-curl-front_uKPCb8P.gif";
import BarbellCurlSide from "./ImagensTreinos/male-barbell-curl-side_NN1ZFmi.gif";
import ReverseBarbellCurlFront from "./ImagensTreinos/male-barbell-reverse-curl-front_ysdi82M.gif";
import ReverseBarbellCurlSide from "./ImagensTreinos/male-barbell-reverse-curl-side_EGHsY3f.gif";

const Biceps = () => {
  return (
    <div className="treino-page">
      <h1>Bíceps</h1>

      {/* Exercício: Chin Ups */}
      <section className="exercise">
        <h2>Chin Ups</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={ChinUpsFront} alt="Chin Ups - Frente" />
          <img src={ChinUpsSide} alt="Chin Ups - Lado" />
        </div>
        <ol>
          <li>
            Segure a barra na largura dos ombros com as palmas voltadas para você
            (pegada supinada).
          </li>
          <li>
            Com o corpo suspenso e os braços totalmente estendidos, puxe-se até
            que o queixo passe da barra.
          </li>
          <li>Volte lentamente à posição inicial. Repita.</li>
        </ol>
      </section>

      {/* Exercício: Dumbbell Curl */}
      <section className="exercise">
        <h2>Dumbbell Curl</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={DumbbellCurlFront} alt="Dumbbell Curl - Frente" />
          <img src={DumbbellCurlSide} alt="Dumbbell Curl - Lado" />
        </div>
        <ol>
          <li>Fique em pé com um halter em cada mão ao lado do corpo.</li>
          <li>
            Levante um halter e gire o antebraço até que fique vertical e a palma
            da mão voltada para o ombro.
          </li>
          <li>Volte à posição inicial e repita com o outro braço.</li>
        </ol>
      </section>

      {/* Exercício: Dumbbell Hammer Curl */}
      <section className="exercise">
        <h2>Dumbbell Hammer Curl</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={HammerCurlFront} alt="Hammer Curl - Frente" />
          <img src={HammerCurlSide} alt="Hammer Curl - Lado" />
        </div>
        <ol>
          <li>
            Segure os halteres com uma pegada neutra (polegares apontando para o
            teto).
          </li>
          <li>Levante lentamente o halter até a altura do peito.</li>
          <li>Volte à posição inicial e repita.</li>
        </ol>
      </section>

      {/* Exercício: Dumbbell Reverse Curl */}
      <section className="exercise">
        <h2>Dumbbell Reverse Curl</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={ReverseCurlFront} alt="Reverse Curl - Frente" />
          <img src={ReverseCurlSide} alt="Reverse Curl - Lado" />
        </div>
        <ol>
          <li>
            Segure os halteres com uma pegada pronada (palmas voltadas para baixo).
          </li>
          <li>
            Flexione os cotovelos até que os bíceps toquem os antebraços. Tente
            manter os cotovelos alinhados ao corpo.
          </li>
        </ol>
      </section>

      {/* Exercício: Barbell Curl */}
      <section className="exercise">
        <h2>Barbell Curl</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={BarbellCurlFront} alt="Barbell Curl - Frente" />
          <img src={BarbellCurlSide} alt="Barbell Curl - Lado" />
        </div>
        <ol>
          <li>
            Segure a barra com os braços fixos e enrole os pesos para frente
            enquanto contrai os bíceps.
          </li>
          <li>
            Continue o movimento até que os bíceps estejam totalmente contraídos
            e a barra esteja na altura dos ombros.
          </li>
          <li>Mantenha a posição contraída por um segundo e aperte os bíceps.</li>
          <li>Volte lentamente à posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Reverse Barbell Curl */}
      <section className="exercise">
        <h2>Reverse Barbell Curl</h2>
        <p>
          <strong>Dificuldade:</strong> Avançado
        </p>
        <div className="exercise-images">
          <img src={ReverseBarbellCurlFront} alt="Reverse Barbell Curl - Frente" />
          <img src={ReverseBarbellCurlSide} alt="Reverse Barbell Curl - Lado" />
        </div>
        <ol>
          <li>
            Pegue a barra com uma pegada pronada (palmas para baixo) e alinhada à
            largura dos ombros.
          </li>
          <li>
            Enrole até que o antebraço pressione no bíceps. Depois, estenda os
            cotovelos completamente no final de cada repetição.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Biceps;
