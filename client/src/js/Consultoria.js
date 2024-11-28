import React from "react";
import "../css/Consultoria.css";

const Consultoria = () => {
    return (
        <div className="consultoria-page">
            {/* Banner com imagem de fundo */}
            <section className="consultoria-banner">
                <div className="overlay-content">
                    <div className="consultoria-info">
                        <h1>Transforme Seus Objetivos em Realidade</h1>
                        <p>
                            Nossos especialistas estão prontos para criar um plano personalizado para você, com acompanhamento contínuo para garantir o sucesso.
                        </p>
                        <ul>
                            <li>📋 Planos personalizados para suas necessidades.</li>
                            <li>💡 Estratégias práticas e eficazes.</li>
                            <li>🔄 Ajustes contínuos com base no seu progresso.</li>
                        </ul>
                    </div>

                    <div className="consultoria-form">
                        <h2>Inscreva-se</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nome*</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefone*</label>
                                <div className="phone-input">
                                    
                                    <input type="text" id="phone" name="phone" required />
                                </div>
                            </div>
                            <button type="submit" className="btn-primary">
                                Fazer Inscrição
                            </button>
                        </form>
                        <p className="form-note">
                        Estamos comprometidos em utilizar suas informações apenas para ajudá-lo a atingir seus objetivos de saúde e bem-estar.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Consultoria;
