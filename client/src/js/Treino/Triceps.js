import React from "react";
import "../../css/Treino/Triceps.css";
import dipsFront from "./ImagensTreinos/male-bodyweight-dips-front.gif";
import dipsSide from "./ImagensTreinos/male-bodyweight-dips-side.gif";
import diamondPushupFront from "./ImagensTreinos/male-bodyweight-diamond-pushup-front.gif";
import diamondPushupSide from "./ImagensTreinos/male-bodyweight-diamond-pushup-side.gif";
import benchDipsFront from "./ImagensTreinos/male-bodyweight-tricep-dips-front.gif";
import benchDipsSide from "./ImagensTreinos/male-bodyweight-tricep-dips-side.gif";
import overheadExtensionFront from "./ImagensTreinos/male-dumbbell-overhead-tricep-extension-front.gif";
import overheadExtensionSide from "./ImagensTreinos/male-dumbbell-overhead-tricep-extension-side.gif";
import layingExtensionFront from "./ImagensTreinos/male-barbell-laying-tricep-extensions-front.gif";
import layingExtensionSide from "./ImagensTreinos/male-barbell-laying-tricep-extensions-side.gif";
import skullCrusherFront from "./ImagensTreinos/male-barbell-skullcrusher-front_qpHWUa8.gif";
import skullCrusherSide from "./ImagensTreinos/male-barbell-skullcrusher-side_B7Z6225.gif";

const Triceps = () => {
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
        <h1 className="text-start">Triceps</h1>
      </div>

      <div className="container treino-section">
        <h2 className="pt-2">Dips</h2>
        <p>
          <strong>Difficulty:</strong> Intermediate
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img className="w-100" src={dipsFront} alt="Dips Front" />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img className="w-100" src={dipsSide} alt="Dips Side" />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Hold your body with arms locked above the equipment.
          </li>
          <li className="list-group-item">
            Lower your body slowly while leaning forward and flaring out your
            elbows.
          </li>
          <li className="list-group-item">
            Raise your body above the bars until your arms are locked.
          </li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Diamond Push Ups</h2>
        <p>
          <strong>Difficulty:</strong> Beginner
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={diamondPushupFront}
              alt="Diamond Push Up Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={diamondPushupSide}
              alt="Diamond Push Up Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Position your index fingers and thumbs so they form a diamond shape.
          </li>
          <li className="list-group-item">Use a standard push-up position.</li>
          <li className="list-group-item">
            Lower your chest towards your hands, keeping your elbows close to
            your body.
          </li>
          <li className="list-group-item">
            Stop just before your chest touches the floor, then push back up to
            the starting position.
          </li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Bench Dips</h2>
        <p>
          <strong>Difficulty:</strong> Beginner
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={benchDipsFront}
              alt="Bench Dips Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img className="w-100" src={benchDipsSide} alt="Bench Dips Side" />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Grip the edge of the bench with your hands, keeping your feet
            together and legs straight.
          </li>
          <li className="list-group-item">Lower your body straight down.</li>
          <li className="list-group-item">
            Slowly press back up to the starting point.
          </li>
          <li className="list-group-item">
            TIP: Make this harder by raising your feet off the floor and adding
            weight.
          </li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Seated Overhead Triceps Extension</h2>
        <p>
          <strong>Difficulty:</strong> Intermediate
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={overheadExtensionFront}
              alt="Overhead Triceps Extension Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={overheadExtensionSide}
              alt="Overhead Triceps Extension Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Sit on the bench and hold a dumbbell with both hands, raising it
            overhead at arm's length.
          </li>
          <li className="list-group-item">
            Keep your elbows in while lowering the weight behind your head.
          </li>
          <li className="list-group-item">Raise the weight back to start.</li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Laying Triceps Extension</h2>
        <p>
          <strong>Difficulty:</strong> Intermediate
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={layingExtensionFront}
              alt="Laying Triceps Extension Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={layingExtensionSide}
              alt="Laying Triceps Extension Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Lay on a flat bench while holding a barbell with a shoulder-width
            grip.
          </li>
          <li className="list-group-item">
            Fully extend your elbows until the barbell is directly over your
            chest.
          </li>
          <li className="list-group-item">
            Flex your elbows and allow the barbell to nearly touch your
            forehead.
          </li>
          <li className="list-group-item">
            Extend your elbows back to the starting position and repeat.
          </li>
        </ol>
      </div>

      <div className="container treino-section">
        <h2>Barbell SkullCrusher</h2>
        <p>
          <strong>Difficulty:</strong> Intermediate
        </p>
        <div className="row">
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={skullCrusherFront}
              alt="Barbell SkullCrusher Front"
            />
          </div>
          <div className="col-lg-6 px-1 py-1">
            <img
              className="w-100"
              src={skullCrusherSide}
              alt="Barbell SkullCrusher Side"
            />
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item">
            Take a shoulder-width grip and break at the elbows, keeping them
            tucked in.
          </li>
          <li className="list-group-item">
            Stop the bar a few inches from your forehead, then extend back up.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Triceps;
