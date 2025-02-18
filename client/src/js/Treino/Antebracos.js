import React from "react";
import "../../css/Treino/Antebracos.css"; // Certifique-se de que este arquivo exista e o caminho esteja correto
import ChinupFront from "./ImagensTreinos/male-bodyweight-chinup-front.gif";
import ChinupSide from "./ImagensTreinos/male-bodyweight-chinup-side.gif";
import WristCurlFront from "./ImagensTreinos/male-dumbbell-wrist-curl-front.gif";
import WristCurlSide from "./ImagensTreinos/male-dumbbell-wrist-curl-side.gif";
import WristExtensionFront from "./ImagensTreinos/male-dumbbell-wrist-extension-front.gif";
import WristExtensionSide from "./ImagensTreinos/male-dumbbell-wrist-extension-side.gif";
import ReverseCurlFront from "./ImagensTreinos/male-dumbbell-reverse-curl-front.gif";
import ReverseCurlSide from "./ImagensTreinos/male-dumbbell-reverse-curl-side.gif";
import BarbellWristCurlFront from "./ImagensTreinos/barbell-wristcurl-male-front.gif";
import BarbellWristCurlSide from "./ImagensTreinos/barbell-wristcurl-male-side.gif";
import BarbellReverseCurlFront from "./ImagensTreinos/male-barbell-reverse-curl-front_ysdi82M.gif";
import BarbellReverseCurlSide from "./ImagensTreinos/male-barbell-reverse-curl-side_EGHsY3f.gif";

const Antebracos = () => {
  return (
    <div className="treino-page">
      <h1>Antebraços</h1>

      {/* Exercício: Chin Ups */}
      <section className="exercise">
        <h2>Chin Ups</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={ChinupFront} alt="Chin Ups - Frente" />
          <img src={ChinupSide} alt="Chin Ups - Lado" />
        </div>
        <ol>
          <li>Segure a barra com as mãos na largura dos ombros e as palmas voltadas para você.</li>
          <li>Com o corpo pendurado e os braços estendidos, puxe-se até que o queixo ultrapasse a barra.</li>
          <li>Retorne lentamente à posição inicial. Repita.</li>
        </ol>
      </section>

      {/* Exercício: Wrist Curl */}
      <section className="exercise">
        <h2>Dumbbells Wrist Curl</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={WristCurlFront} alt="Wrist Curl - Frente" />
          <img src={WristCurlSide} alt="Wrist Curl - Lado" />
        </div>
        <ol>
          <li>Segure o haltere com a palma voltada para cima e o antebraço apoiado no banco.</li>
          <li>Flexione lentamente o punho para cima em um movimento semicircular.</li>
          <li>Retorne à posição inicial e repita.</li>
        </ol>
      </section>

      {/* Exercício: Wrist Extension */}
      <section className="exercise">
        <h2>Dumbbells Wrist Extension</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={WristExtensionFront} alt="Wrist Extension - Frente" />
          <img src={WristExtensionSide} alt="Wrist Extension - Lado" />
        </div>
        <ol>
          <li>Segure dois halteres com uma pegada por cima e apoie os antebraços nos joelhos.</li>
          <li>Deixe os punhos flexionarem completamente e, em seguida, estenda-os.</li>
        </ol>
      </section>

      {/* Exercício: Reverse Curl */}
      <section className="exercise">
        <h2>Dumbbells Reverse Curls</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={ReverseCurlFront} alt="Reverse Curl - Frente" />
          <img src={ReverseCurlSide} alt="Reverse Curl - Lado" />
        </div>
        <ol>
          <li>Segure os halteres com uma pegada pronada (palmas para baixo).</li>
          <li>Flexione os cotovelos até que os bíceps toquem os antebraços, evitando que os cotovelos saiam do lugar.</li>
        </ol>
      </section>

      {/* Exercício: Barbell Wrist Curl */}
      <section className="exercise">
        <h2>Barbell Wrist Curl</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={BarbellWristCurlFront} alt="Barbell Wrist Curl - Frente" />
          <img src={BarbellWristCurlSide} alt="Barbell Wrist Curl - Lado" />
        </div>
        <ol>
          <li>Segure uma barra com uma pegada supinada (palmas para cima).</li>
          <li>Apoie os antebraços em um banco, com os pulsos para fora.</li>
          <li>Flexione os pulsos para cima e retorne lentamente.</li>
        </ol>
      </section>

      {/* Exercício: Reverse Barbell Curl */}
      <section className="exercise">
        <h2>Reverse Barbell Curl</h2>
        <p>
          <strong>Dificuldade:</strong> Avançado
        </p>
        <div className="exercise-images">
          <img src={BarbellReverseCurlFront} alt="Reverse Barbell Curl - Frente" />
          <img src={BarbellReverseCurlSide} alt="Reverse Barbell Curl - Lado" />
        </div>
        <ol>
          <li>Use uma pegada pronada (palmas para baixo) com as mãos na largura dos ombros.</li>
          <li>Flexione os cotovelos até que o antebraço pressione o bíceps e retorne lentamente.</li>
        </ol>
      </section>
    </div>
  );
};

export default Antebracos;
