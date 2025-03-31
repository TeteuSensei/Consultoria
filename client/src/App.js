import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./js/Menu"; // Importando o Menu
import Home from "./js/Home";
import Contato from "./js/Contato";
import Loja from "./js/Loja";
import Videos from "./js/Videos";
import Consultoria from "./js/Consultoria";
import Footer from "./js/Footer"; // Importando o Footer
import Treinamento from "./js/Treinamento";
import Abdomen from "./js/Treino/Abdomen";
import Biceps from "./js/Treino/Biceps";
import Panturrilha from "./js/Treino/Panturrilha";
import Peito from "./js/Treino/Peito";
import Antebracos from "./js/Treino/Antebracos";
import Gluteos from "./js/Treino/Gluteos";
import Dorsal from "./js/Treino/Dorsal";
import InferioresCostas from "./js/Treino/InferioresCostas";
import MusculoObliquo from "./js/Treino/MusculoObliquo";
import Quadriceps from "./js/Treino/Quadriceps";
import Ombro from "./js/Treino/Ombro";
import Trapezio from "./js/Treino/Trapezio";
import TrapezioInferior from "./js/Treino/TrapezioInferior";
import Triceps from "./js/Treino/Triceps";
import WorkoutGenerator from "./js/WorkoutGenerator";
import Login from "./js/Login";

import Dashboard from "./js/Dashboard";




import Teste from "./js/Teste";
import Cadastro from "./js/Cadastro";
import CadastroTreino from "./js/CadastroTreino";


function App() {
    return (
        <Router>
            {/* Menu fixo em todas as páginas */}
            <Menu />

            {/* Rotas */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/loja" element={<Loja />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/consultoria" element={<Consultoria />} />
                <Route path="/Treinamento" element={<Treinamento />} />
                <Route path="/WorkoutGenerator" element={<WorkoutGenerator/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/CadastroTreino" element={<CadastroTreino/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
              

                <Route path="/Teste" element={<Teste/>} />
               


                {/* Ajuste das Rotas do Treinamento */}
                <Route path="/treino/abdomen" element={<Abdomen />} />
                <Route path="/treino/biceps" element={<Biceps />} />
                <Route path="/treino/panturrilha" element={<Panturrilha />} />
                <Route path="/treino/peito" element={<Peito/>} />
                <Route path="/treino/antebracos" element={<Antebracos/>} />
                <Route path="/treino/gluteos" element={<Gluteos/>} />
                <Route path="/treino/dorsal" element={<Dorsal/>} />
                <Route path="/treino/inferiorescostas" element={<InferioresCostas/>} />
                <Route path="/treino/musculoobliquo" element={<MusculoObliquo/>} />
                <Route path="/treino/quadriceps" element={<Quadriceps/>} />
                <Route path="/treino/ombro" element={<Ombro/>} />
                <Route path="/treino/trapezio" element={<Trapezio/>} />
                <Route path="/treino/trapezioinferior" element={<TrapezioInferior/>} />
                <Route path="/treino/Triceps" element={<Triceps/>} />
                







                
            </Routes>
            <Footer /> {/* Footer fixo */}
        </Router>
    );
}

export default App;
