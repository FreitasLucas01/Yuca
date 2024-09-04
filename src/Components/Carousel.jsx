import React from "react";
import styles from "./Carousel.module.css";
import CardCarousel from "./CardCarousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeticiaSVG from "../img/LeticiaSVG.svg?react";
import VitorSVG from "../img/VitorSVG.svg?react";
import MarciaSVG from "../img/MarciaSVG.svg?react";
import DiegoSVG from "../img/DiegoSVG.svg?react";
import ArrowNextSVG from "../Assets/arrowNext.svg?react";
import ArrowPrevSVG from "../Assets/arrowPrev.svg?react";

const Carousel = () => {
  let sliderRef = React.useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    dotsClass: styles.buttonBar,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const clientsData = [
    {
      id: 1,
      url: <LeticiaSVG />,
      name: "Letícia Moraes",
      role: "Administradora",
      description:
        "Tive a oportunidade de investir em um novo empreendimento da Yuca e foi surpreendente ver como a plataforma trouxe, através da digitalização, inovação e diversidade para o pequeno investidor.",
    },
    {
      id: 2,
      url: <VitorSVG />,
      name: "Vitor Cardoso",
      role: "Publicitário",
      description:
        "Tenho gostado muito de investir na Yuca, desde o início da oferta, lives e tira dúvidas até o acompanhamento mensal de desempenho. Tenho certeza que investi meu dinheiro com especialistas de peso.",
    },
    {
      id: 3,
      url: <MarciaSVG />,
      name: "Márcia de Albuquerque",
      role: "Dentista",
      description:
        "Minha experiência com a Yuca tem sido muito boa. O atendimento é excelente, as informações sobre os projetos são claras, estão sempre disponíveis para nos auxiliar e os rendimentos têm superado as expectativas.",
    },
    {
      id: 4,
      url: <DiegoSVG />,
      name: "Diego Felipe Gusmão",
      role: "Empresário",
      description:
        "Poder investir em negócios e setores restritos junto com investidores altamente qualificados, com um volume financeiro menor e exposição a uma rentabilidade bem acima da média é a equação perfeita!",
    },
  ];

  return (
    <section className={`${styles.carousel}`}>
      <div className={`${styles.carouselTexts}`}>
        <h2 className={`${styles.carouselTitle}`}>Quem investe com a Yuca</h2>
        <p className={`${styles.carouselSubtitle}`}>
          +500 pessoas já investiram até o momento na Yuca.
        </p>
      </div>
      <div className={`${styles.carouselClients}`}>
        <button
          className={`${styles.arrowButton} ${styles.prevButton}`}
          onClick={previous}
        >
          <ArrowPrevSVG aria-label="Button Previous Element"/>
        </button>
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {clientsData.map((items) => (
            <CardCarousel
              key={items.id}
              url={items.url}
              name={items.name}
              role={items.role}
              description={items.description}
            />
          ))}
        </Slider>
        <button
          className={`${styles.arrowButton} ${styles.nextButton}`}
          onClick={next}
        >
          <ArrowNextSVG aria-label="Button Next Element"/>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
