import React from "react";
import "../../css/Treino/TrapezioInferior.css";
import pullUpFront from "./ImagensTreinos/male-bodyweight-pullup-front.gif";
import pullUpSide from "./ImagensTreinos/male-bodyweight-pullup-side.gif";
import elevatedPikePressFront from "./ImagensTreinos/Elevated-Pike-Press.gif";
import elevatedPikePressSide from "./ImagensTreinos/Elevated-Pike-Press-Side.gif";
import dumbbellRowFront from "./ImagensTreinos/male-dumbbell-row-unilateral-front.gif";
import dumbbellRowSide from "./ImagensTreinos/male-dumbbell-unilateral-row-side.gif";
import barbellRowFront from "./ImagensTreinos/male-barbell-bent-over-row-front.gif";
import barbellRowSide from "./ImagensTreinos/male-barbell-bent-over-row-side.gif";

const Trapezio = () => {
  return (
    <div className="container-fluid treino-container">
      <header>
        <a href="/treino">
          <img
            src="/ImagensTreinos/musclewikilogo.png"
            alt="MuscleWiki Logo"
            className="logo"
          />
        </a>
      </header>
      <hr />

      <div className="heading container">
        <h1 className="text-start">Traps (Mid-Back)</h1>
      </div>

      <div className="container treino-section">
        <h2 className="pt-2">Pull Ups</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img className="w-100" src={pullUpFront} alt="Pull Up Front" />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img className="w-100" src={pullUpSide} alt="Pull Up Side" />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">Segure a barra com pegada pronada.</li>
          <li className="list-group-item">Puxe o corpo até o queixo ultrapassar a barra.</li>
          <li className="list-group-item">Retorne à posição inicial.</li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Elevated Pike Press</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={elevatedPikePressFront}
              alt="Elevated Pike Press Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={elevatedPikePressSide}
              alt="Elevated Pike Press Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">Use uma plataforma para elevar os pés.</li>
          <li className="list-group-item">Abaixe a cabeça dobrando os cotovelos.</li>
          <li className="list-group-item">
            Empurre com as mãos para voltar à posição inicial.
          </li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Dumbbell Row Unilateral</h2>
        <p>
          <strong>Dificuldade:</strong> Iniciante
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={dumbbellRowFront}
              alt="Dumbbell Row Unilateral Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={dumbbellRowSide}
              alt="Dumbbell Row Unilateral Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Apoie o braço livre em algo estável e posicione a perna oposta atrás.
          </li>
          <li className="list-group-item">
            Mantenha o tronco paralelo ao chão para maior amplitude.
          </li>
          <li className="list-group-item">
            Puxe o halter para trás enquanto imagina segurando uma bola de tênis
            na axila.
          </li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Bent Over Barbell Row</h2>
        <p>
          <strong>Dificuldade:</strong> Intermediário
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img className="w-100" src={barbellRowFront} alt="Barbell Row Front" />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img className="w-100" src={barbellRowSide} alt="Barbell Row Side" />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Pegue a barra com pegada pronada na largura dos ombros.
          </li>
          <li className="list-group-item">Incline o tronco com as costas retas.</li>
          <li className="list-group-item">Puxe a barra em direção ao abdômen.</li>
          <li className="list-group-item">
            Retorne lentamente à posição inicial.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Trapezio;
