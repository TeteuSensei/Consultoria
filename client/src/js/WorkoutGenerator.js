import React, { useState } from "react";
import "../css/WorkoutGenerator.css";

const WorkoutGenerator = () => {
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState("");
  const [level, setLevel] = useState("");
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [equipment, setEquipment] = useState("");
  const [workout, setWorkout] = useState([]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const isNextDisabled = () => {
    if (step === 1 && !objective) return true;
    if (step === 2 && !level) return true;
    if (step === 3 && muscleGroups.length === 0) return true;
    if (step === 4 && !equipment) return true;
    return false;
  };

  const generateWorkout = () => {
    // Example logic: Fetch exercises based on the selected criteria
    const exercises = [
      { name: "Supino Reto", group: "Peito", equipment: "Halteres" },
      { name: "Flexões", group: "Peito", equipment: "Peso Corporal" },
      { name: "Agachamento", group: "Pernas", equipment: "Peso Corporal" },
      { name: "Levantamento Terra", group: "Costas", equipment: "Barra" },
    ];

    const filteredExercises = exercises.filter(
      (exercise) =>
        muscleGroups.includes(exercise.group) && exercise.equipment === equipment
    );

    setWorkout(filteredExercises);
    nextStep();
  };

  return (
    <div className="workout-generator">
      <h1>Gerador de Treinos Personalizados</h1>
      <p>Planeje seus treinos de forma simples e eficiente.</p>

      {step === 1 && (
        <div className="step">
          <h2>Objetivo</h2>
          <div className="option-container">
            {['Emagrecimento', 'Hipertrofia', 'Definição'].map((item) => (
              <button
                key={item}
                className={`option-btn ${objective === item ? 'selected' : ''}`}
                onClick={() => setObjective(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="step">
          <h2>Nível de Treino</h2>
          <div className="option-container">
            {['Iniciante', 'Intermediário', 'Avançado'].map((item) => (
              <button
                key={item}
                className={`option-btn ${level === item ? 'selected' : ''}`}
                onClick={() => setLevel(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step">
          <h2>Grupos Musculares</h2>
          <div className="option-container">
            {['Peito', 'Costas', 'Pernas', 'Ombros'].map((group) => (
              <button
                key={group}
                className={`option-btn ${muscleGroups.includes(group) ? 'selected' : ''}`}
                onClick={() =>
                  setMuscleGroups((prev) =>
                    prev.includes(group)
                      ? prev.filter((g) => g !== group)
                      : [...prev, group]
                  )
                }
              >
                {group}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="step">
          <h2>Equipamento Disponível</h2>
          <div className="option-container">
            {['Halteres', 'Máquina', 'Barra', 'Kettlebells', 'Peso Corporal'].map(
              (item) => (
                <button
                  key={item}
                  className={`option-btn ${equipment === item ? 'selected' : ''}`}
                  onClick={() => setEquipment(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="step">
          <h2>Seu Treino Personalizado</h2>
          <ul>
            {workout.map((exercise, index) => (
              <li key={index}>{exercise.name}</li>
            ))}
          </ul>
          <button onClick={() => setStep(1)} className="btn-secondary">
            Recomeçar
          </button>
        </div>
      )}

      {step < 5 && (
        <div className="controls">
          {step > 1 && (
            <button onClick={prevStep} className="btn-secondary">
              Voltar
            </button>
          )}
          {step < 4 && (
            <button
              onClick={nextStep}
              className="btn-primary"
              disabled={isNextDisabled()}
            >
              Próximo
            </button>
          )}
          {step === 4 && (
            <button
              onClick={generateWorkout}
              className="btn-primary"
              disabled={isNextDisabled()}
            >
              Gerar Treino
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkoutGenerator;
