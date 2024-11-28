import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css"; // Importa os estilos

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        { id: 1, name: "Produto 1", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Produto 2", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Produto 3", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Produto 4", image: "https://via.placeholder.com/150" },
        { id: 5, name: "Produto 5", image: "https://via.placeholder.com/150" },
        { id: 6, name: "Produto 6", image: "https://via.placeholder.com/150" },
        { id: 7, name: "Produto 7", image: "https://via.placeholder.com/150" },
        { id: 8, name: "Produto 8", image: "https://via.placeholder.com/150" },
        { id: 9, name: "Produto 9", image: "https://via.placeholder.com/150" },
        { id: 10, name: "Produto 10", image: "https://via.placeholder.com/150" },
    ];

    // Configurações do banner rotativo
    const bannerSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Movimento automático da faixa de compras
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [products.length]);

    // Produtos visíveis na faixa
    const visibleProducts = products.slice(currentIndex, currentIndex + 5).concat(
        products.slice(0, Math.max(0, currentIndex + 5 - products.length))
    );

    return (
        <div className="home">
            {/* Cabeçalho com título e descrição */}
            <header className="home-header">
                <div className="header-content">
                    <h1>Bem-vindo à Consultoria Física</h1>
                    <p>Online e Presencial - Tudo para alcançar seus objetivos</p>
                    <button className="btn-primary">Comece Agora</button>
                </div>
            </header>

            {/* Seção do Banner Rotativo */}
            <section id="about" className="about">
                <div className="about-container">
                    <div className="banner-rotativo">
                        <Slider {...bannerSettings}>
                            {/* Slides do Banner */}
                            {['Banner 1', 'Banner 2', 'Banner 3'].map((banner, index) => (
                                <div key={index}>
                                    <img
                                        src={`https://via.placeholder.com/600x300`}
                                        alt={banner}
                                        className="banner-image"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>



            {/* Funcionalidades */}
            <section id="features" className="features">
                <div className="feature">
                    <h2>🎥 Vídeos de Treinos</h2>
                    <p>Acompanhe treinos personalizados para todos os níveis.</p>
                </div>

                {/* Layout de Vídeos */}
                <div className="videos-layout">
                    {/* Espaço maior à esquerda */}
                    <div className="video-large">
                        <video
                            src="/videos/Ana.mp4" // Caminho correto para acessar dentro da pasta public
                            controls
                            autoPlay
                            loop
                            muted
                            className="video-player"
                        ></video>
                    </div>


                    {/* Espaços menores à direita */}
                    <div className="videos-small">
                        <div className="video-small">
                            <iframe
                                src="https://www.youtube.com/embed/kJQP7kiw5Fk"
                                title="Vídeo 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-small">
                            <iframe
                                src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
                                title="Vídeo 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        
                        <div className="video-small video-small-wide">
                            <iframe
                                src="https://www.youtube.com/embed/hTWKbfoikeg"
                                title="Vídeo 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                </section>
                        
            {/* Seção de Consultorias */}
            <section id="consultorias" className="consultorias-section">
                <div className="consultorias-content">
                    <h2>👥 Consultorias Personalizadas</h2>
                    <p>
                        Descubra o melhor caminho para alcançar seus objetivos com nossas consultorias especializadas. Clique no botão abaixo para saber mais.
                    </p>
                    <button
                        className="btn-consultoria"
                        onClick={() => window.location.href = "/consultoria"}
                    >
                        Saiba Mais
                    </button>
                </div>
            </section>



            {/* Seção de Podcast */}
            <section id="podcast" className="podcast-section">
                <h2>🎙️ Nosso Podcast</h2>
                <p>Descubra histórias inspiradoras, dicas práticas e muito mais em nosso podcast exclusivo, voltado para bem-estar e estilo de vida saudável.</p>

                <div className="podcast-layout">
                    {/* Imagem maior à esquerda */}
                    <div className="podcast-large">
                        <img
                            src="https://via.placeholder.com/600x300"
                            alt="Podcast principal"
                        />
                    </div>

                    {/* Imagens menores à direita */}
                    <div className="podcast-small">
                        <img
                            src="/Imagens/podcast2.jpg"
                            alt="Podcast adicional 1"
                        />
                        <img
                            src="/Imagens/podcast2.jpg"
                            alt="Podcast adicional 2"
                        />
                    </div>
                </div>
            </section>



            {/* Faixa de Compras */}
            <section id="shop" className="shop">
                <h2>🛒 Loja Fitness </h2>
                <div className="product-carousel">
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={5}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={3000}
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                            },
                        ]}
                    >
                        {products.map((product) => (
                            <div className="product" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <p>{product.name}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Faixa de Compras */}
            

            
        </div>
    );
};

export default Home;
