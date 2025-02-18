import React from "react";
import "../../css/Treino/Trapezio.css";
import elevatedPikePress from "./ImagensTreinos/Elevated-Pike-Press.gif";
import elevatedPikePressSide from "./ImagensTreinos/Elevated-Pike-Press-Side.gif";
import elevatedPikeShrug from "./ImagensTreinos/Elevated-Pike-Shoulder-Shrug.gif";
import elevatedPikeShrugSide from "./ImagensTreinos/Elevated-Pike-Shoulder-Shrug-Side.gif";
import dumbbellShrugFront from "./ImagensTreinos/male-dumbbell-shrug-front.gif";
import dumbbellShrugSide from "./ImagensTreinos/male-dumbbell-shrug-side.gif";
import seatedShrugFront from "./ImagensTreinos/male-dumbbell-seated-shrug-front.gif";
import seatedShrugSide from "./ImagensTreinos/male-dumbbell-seated-shrug-side.gif";
import uprightRowFront from "./ImagensTreinos/male-barbell-upright-row-front_3ROsKgm.gif";
import uprightRowSide from "./ImagensTreinos/male-barbell-upright-row-side_NBzD3il.gif";

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
        <h1 className="text-start">Traps</h1>
      </div>

      <div className="container treino-section">
        <h2 className="pt-2">Elevated Pike Press</h2>
        <p>
          <strong>Difficulty:</strong> Intermediate
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={elevatedPikePress}
              alt="Elevated Pike Press"
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
          <li className="list-group-item">Use a bench or object to elevate your feet.</li>
          <li className="list-group-item">Lower your head by bending your elbows.</li>
          <li className="list-group-item">
            Push through your hands to return to the starting position.
          </li>
          <li className="list-group-item">Repeat.</li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Elevated Pike Shoulder Shrug</h2>
        <p>
          <strong>Difficulty:</strong> Beginner
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={elevatedPikeShrug}
              alt="Elevated Pike Shoulder Shrug"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={elevatedPikeShrugSide}
              alt="Elevated Pike Shoulder Shrug Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">Use a bench to elevate your feet.</li>
          <li className="list-group-item">
            Lower your scapula while keeping elbows locked.
          </li>
          <li className="list-group-item">
            Slowly return to the starting position.
          </li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Dumbbell Shrugs</h2>
        <p>
          <strong>Difficulty:</strong> Beginner
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={dumbbellShrugFront}
              alt="Dumbbell Shrugs Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={dumbbellShrugSide}
              alt="Dumbbell Shrugs Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Stand tall holding dumbbells, pull shoulder blades up.
          </li>
          <li className="list-group-item">
            Hold for one second at the top, then lower.
          </li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Dumbbell Seated Shrugs</h2>
        <p>
          <strong>Difficulty:</strong> Beginner
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={seatedShrugFront}
              alt="Dumbbell Seated Shrugs Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={seatedShrugSide}
              alt="Dumbbell Seated Shrugs Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">Sit with dumbbells in both hands.</li>
          <li className="list-group-item">
            Elevate shoulders and hold at the top.
          </li>
          <li className="list-group-item">
            Lower shoulders slowly to starting position.
          </li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Barbell Upright Row</h2>
        <p>
          <strong>Difficulty:</strong> Advanced
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={uprightRowFront}
              alt="Barbell Upright Row Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={uprightRowSide}
              alt="Barbell Upright Row Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Hold the barbell with a shoulder-width grip.
          </li>
          <li className="list-group-item">
            Pull elbows straight up until the bar reaches chin level.
          </li>
          <li className="list-group-item">Lower and repeat.</li>
        </ol>
      </div>
    </div>
  );
};

export default Trapezio;
