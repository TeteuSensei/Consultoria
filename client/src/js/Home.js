import React, { useState, useEffect } from "react";
import "../css/Home.css"; // Ajuste conforme o seu caminho
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PodCast from "../css/Imagens/Home/podcast2.jpg";
import treinos from "../css/Imagens/Home/treinos.PNG";
import consultoria from "../css/Imagens/Home/consultoria.jpg";

const Home = () => {
  const navigate = useNavigate();
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

  // Configurações do slider para faixa de compras
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
    {/* Banner Principal */}
    <section className="banner">
      <div className="banner-content">
        <h1>Transforme sua rotina com nossos serviços</h1>
        <p>
          Na LWA - Live With an Athlete, oferecemos uma abordagem personalizada
          para alcançar seus objetivos de saúde e bem-estar. Combinando tecnologia
          avançada, profissionais qualificados e suporte contínuo, fornecemos
          tudo que você precisa para transformar sua vida.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate("/consultoria")}
        >
          Comece Agora
        </button>
      </div>
    </section>
  
    {/* Três Contêineres Lado a Lado */}
    <section className="three-containers">
      <div className="service-card">
        <img src={consultoria} alt="Consultoria" />
        <h3>Consultoria Fitness</h3>
        <p>Personalize seu treino com acompanhamento contínuo.</p>
        <button className="btn-primary" onClick={() => navigate("/consultoria")}>
          Consultoria
        </button>
      </div>
      <div className="service-card">
        <img src={treinos} alt="Treinos" />
        <h3>Treinamento Online</h3>
        <p>Treinos flexíveis de acordo com suas necessidades.</p>
        <button className="btn-primary" onClick={() => navigate("/treinamento")}>
          Treinos
        </button>
      </div>
      <div className="service-card">
        <img src={PodCast} alt="PodCast" />
        <h3>PodCast</h3>
        <p>Descubra insights e histórias motivadoras no nosso canal.</p>
        <button className="btn-primary" onClick={() => navigate("/podcast")}>
          PodCast
        </button>
      </div>
    </section>
  
    {/* Depoimentos */}
    <section className="testimonials">
      <h2>Depoimentos</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <img src="https://via.placeholder.com/150" alt="Cliente 1" />
          <p>"Melhorei minha forma física de forma rápida e eficaz!"</p>
          <span>- João Silva</span>
        </div>
        <div className="testimonial-card">
          <img src="https://via.placeholder.com/150" alt="Cliente 2" />
          <p>
            "Consultoria excelente, me ajudou a alcançar todos os meus objetivos!"
          </p>
          <span>- Maria Oliveira</span>
        </div>
      </div>
    </section>
  
    {/* Loja Fitness */}
    <section id="shop" className="shop">
      <h2>Loja Fitness</h2>
      <Slider {...carouselSettings} className="product-carousel">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  </div>
  
  );
};

export default Home;
