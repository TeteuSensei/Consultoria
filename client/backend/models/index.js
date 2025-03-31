const Treino = require("./Treino");
const Exercicio = require("./Exercicio");

Treino.belongsToMany(Exercicio, { through: "TreinoExercicio" });
Exercicio.belongsToMany(Treino, { through: "TreinoExercicio" });

module.exports = { Treino, Exercicio };
