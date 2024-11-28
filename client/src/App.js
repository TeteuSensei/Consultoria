import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./js/Menu"; // Importando o Menu
import Home from "./js/Home";
import Contato from "./js/Contato";
import Loja from "./js/Loja";
import Videos from "./js/Videos";
import Consultoria from "./js/Consultoria";
import Footer from "./js/Footer"; // Importando o Footer

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
            </Routes>
            <Footer /> {/* Footer fixo */}
        </Router>
    );
}

export default App;
