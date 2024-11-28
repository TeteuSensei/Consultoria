import React from "react";
import "../css/Loja.css"; // Adicione um arquivo CSS específico para estilizar a página da loja

const Loja = () => {
    return (
        <div className="loja-container">
            {/* Banner principal da loja */}
            <div className="loja-banner">
                <h1>Bem-vindo à Nossa Loja Fitness</h1>
                <p>Encontre os melhores produtos para alcançar seus objetivos de saúde e bem-estar.</p>
            </div>

            {/* Seção de categorias de produtos */}
            <section className="categorias">
                <h2>Categorias</h2>
                <div className="categorias-container">
                    <div className="categoria-card">
                        <img src="https://via.placeholder.com/200" alt="Suplementos" />
                        <h3>Suplementos</h3>
                    </div>
                    <div className="categoria-card">
                        <img src="https://via.placeholder.com/200" alt="Equipamentos" />
                        <h3>Equipamentos</h3>
                    </div>
                    <div className="categoria-card">
                        <img src="https://via.placeholder.com/200" alt="Roupas Fitness" />
                        <h3>Roupas Fitness</h3>
                    </div>
                </div>
            </section>

            {/* Seção de produtos em destaque */}
            <section className="produtos-destaque">
                <h2>Produtos em Destaque</h2>
                <div className="produtos-container">
                    <div className="produto-card">
                        <img src="https://via.placeholder.com/150" alt="Produto 1" />
                        <h3>Produto 1</h3>
                        <p>R$ 100,00</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                    <div className="produto-card">
                        <img src="https://via.placeholder.com/150" alt="Produto 2" />
                        <h3>Produto 2</h3>
                        <p>R$ 200,00</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                    <div className="produto-card">
                        <img src="https://via.placeholder.com/150" alt="Produto 3" />
                        <h3>Produto 3</h3>
                        <p>R$ 150,00</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </section>

            {/* Seção promocional */}
            <section className="promocao">
                <h2>Promoções Exclusivas</h2>
                <p>Confira nossas ofertas e aproveite preços especiais.</p>
                <button className="btn-promocao">Ver Promoções</button>
            </section>
        </div>
    );
};

export default Loja;
