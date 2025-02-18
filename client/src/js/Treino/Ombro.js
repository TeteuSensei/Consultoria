import React from "react";
import "../../css/Treino/Ombro.css"; // Certifique-se de criar este arquivo CSS
import PikePressFront from "./ImagensTreinos/Elevated-Pike-Press.gif";
import PikePressSide from "./ImagensTreinos/Elevated-Pike-Press-Side.gif";
import PikeShrugFront from "./ImagensTreinos/Elevated-Pike-Shoulder-Shrug.gif";
import PikeShrugSide from "./ImagensTreinos/Elevated-Pike-Shoulder-Shrug-Side.gif";
import DumbbellOverheadFront from "./ImagensTreinos/male-dumbbell-seated-overhead-press-front.gif";
import DumbbellOverheadSide from "./ImagensTreinos/male-dumbbell-seated-overhead-press-side.gif";
import LateralRaiseFront from "./ImagensTreinos/male-dumbbell-lateral-raise-front.gif";
import LateralRaiseSide from "./ImagensTreinos/male-dumbbell-lateral-raise-side.gif";
import BarbellOverheadFront from "./ImagensTreinos/male-barbell-overhead-press-front_OJMNLxU.gif";
import BarbellOverheadSide from "./ImagensTreinos/male-barbell-overhead-press-side_rFqqcjI.gif";
import UprightRowFront from "./ImagensTreinos/male-barbell-upright-row-front_3ROsKgm.gif";
import UprightRowSide from "./ImagensTreinos/male-barbell-upright-row-side_NBzD3il.gif";

const Ombro = () => {
  return (
    <div className="treino-page">
      <h1>Ombros</h1>

      {/* Exercício: Elevated Pike Press */}
      <section className="exercise">
        <h2>Elevated Pike Press</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={PikePressFront} alt="Elevated Pike Press - Frente" />
          <img src={PikePressSide} alt="Elevated Pike Press - Lado" />
        </div>
        <ol>
          <li>Use um banco ou objeto para elevar os pés.</li>
          <li>Baixe a cabeça em direção ao chão, dobrando os cotovelos.</li>
          <li>
            Empurre com as mãos para retornar à posição inicial em pike.
          </li>
          <li>Repita.</li>
        </ol>
      </section>

      {/* Exercício: Elevated Pike Shoulder Shrug */}
      <section className="exercise">
        <h2>Elevated Pike Shoulder Shrug</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={PikeShrugFront} alt="Shoulder Shrug - Frente" />
          <img src={PikeShrugSide} alt="Shoulder Shrug - Lado" />
        </div>
        <ol>
          <li>
            Use um banco ou objeto, como uma cadeira, para elevar os pés.
          </li>
          <li>
            Abaixe lentamente o corpo (escápulas) mantendo os cotovelos
            travados.
          </li>
          <li>Levante o corpo de volta à posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Dumbbell Seated Overhead Press */}
      <section className="exercise">
        <h2>Pressão Aérea com Halteres Sentado</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={DumbbellOverheadFront} alt="Pressão Aérea - Frente" />
          <img src={DumbbellOverheadSide} alt="Pressão Aérea - Lado" />
        </div>
        <ol>
          <li>
            Sente-se em um banco com apoio para as costas. Levante os halteres à
            altura dos ombros com as palmas para frente.
          </li>
          <li>Levante os halteres para cima e pause na posição contraída.</li>
          <li>Abaixe os pesos de volta à posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Lateral Raise */}
      <section className="exercise">
        <h2>Elevação Lateral</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="exercise-images">
          <img src={LateralRaiseFront} alt="Elevação Lateral - Frente" />
          <img src={LateralRaiseSide} alt="Elevação Lateral - Lado" />
        </div>
        <ol>
          <li>
            Fique em pé com halteres ao lado do corpo, palmas voltadas para os
            quadris.
          </li>
          <li>
            Levante os braços até que fiquem paralelos ao chão, mantendo uma
            leve flexão nos cotovelos.
          </li>
          <li>Pause no topo do movimento.</li>
          <li>Abaixe os braços lentamente de volta à posição inicial.</li>
        </ol>
      </section>

      {/* Exercício: Barbell Overhead Raise */}
      <section className="exercise">
        <h2>Levantamento Aéreo com Barra</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="exercise-images">
          <img src={BarbellOverheadFront} alt="Overhead Raise - Frente" />
          <img src={BarbellOverheadSide} alt="Overhead Raise - Lado" />
        </div>
        <ol>
          <li>
            Pegue a barra com uma pegada ligeiramente mais larga que a largura
            dos ombros.
          </li>
          <li>
            Pressione a barra em direção ao teto, flexionando os ombros e
            estendendo os cotovelos.
          </li>
          <li>
            Abaixe a barra com controle de volta à posição inicial, puxando o
            queixo para trás.
          </li>
        </ol>
      </section>

      {/* Exercício: Barbell Upright Row */}
      <section className="exercise">
        <h2>Remada Alta com Barra</h2>
        <p>
          <strong>Dificuldade:</strong> Avançado
        </p>
        <div className="exercise-images">
          <img src={UprightRowFront} alt="Remada Alta - Frente" />
          <img src={UprightRowSide} alt="Remada Alta - Lado" />
        </div>
        <ol>
          <li>Pegue a barra com pegada dupla pronada, na largura dos ombros.</li>
          <li>
            Puxe os cotovelos diretamente para cima até que a barra atinja o
            nível do queixo ou ligeiramente acima.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Ombro;
