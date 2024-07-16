import React from "react";
import styles from "./ProjectDetails.module.css";
import BlocksSvg from "../Assets/blocks-icon.svg?react";
import GraphicSvg from "../Assets/graphic-icon.svg?react";
import HouseSvg from "../Assets/house-icon.svg?react";
import InvestingSvg from "../Assets/investing-icon.svg?react";
import Bed from "../img/bed.svg?react";
import ManLaptop from "../img/manLaptop.svg?react";
import Couch from "../img/couch.svg?react";
import WomanLaptop from "../img/womanLaptop.svg?react";

const ProjectDetails = () => {
  return (
    <section className={`${styles.projectDetails}`}>
      <div className={`${styles.projectDetailsTexts}`}>
        <h1 className={`${styles.projectDetailsTitle}`}>Como funciona</h1>
        <p className={`${styles.projectDetailsSubtitle}`}>
          A Yuca cuida de tudo: analisa, compra, reforma, aluga e gerencia. Você
          só investe e vê seu dinheiro render.
        </p>
      </div>
      <div className={`${styles.cardContainer} ${styles.cardGridBlocks}`}>
        <div className={`${styles.cardInfo} ${styles.cardBackgroundBlocks}`}>
          <BlocksSvg />
          <div>
            <h2 className={`${styles.cardTitle}`}>Gestão da locação</h2>
            <p
              className={`${styles.cardSubtitle} ${styles.cardSubtitleWidthBlocks}`}
            >
              Divulgamos o apto em nossa própria plataforma para mais de 3k
              interessados em longa estadia. Selecionamos e atendemos os
              inquilinos, assumindo as cobranças.
            </p>
          </div>
        </div>
        <ManLaptop className={styles.cardPhotos}/>
      </div>
      <div className={`${styles.cardContainer} ${styles.cardGridHouse}`}>
        <div className={`${styles.cardInfo} ${styles.cardBackgroundHouse}`}>
          <HouseSvg />
          <div>
            <h2 className={`${styles.cardTitle}`}>Reforma e manutenção</h2>
            <p
              className={`${styles.cardSubtitle} ${styles.cardSubtitleWidthHouse}`}
            >
              Arquitetos e engenheiros da Yuca fazem o projeto de valorização,
              gerenciam a reforma com o melhor custo de obra e realizam todas as
              manutenções preventivas e corretivas.
            </p>
          </div>
        </div>
        <Bed className={styles.cardPhotos} />
      </div>
      <div className={`${styles.cardContainer} ${styles.cardGridInvesting}`}>
        <div className={`${styles.cardInfo} ${styles.cardBackgroundInvesting}`}>
          <InvestingSvg className={styles.investingSvg} />
          <div>
            <h2
              className={`${styles.cardTitle} ${styles.cardTitleWidthInvesting}`}
            >
              Oportunidades de investimento
            </h2>
            <p
              className={`${styles.cardSubtitle} ${styles.cardSubtitleWidthInvesting}`}
            >
              Nossos especialistas identificam ativos reais, estáveis e bons
              para diversificação. Analisamos juridicamente e agilizamos o
              processo de aquisição para você.
            </p>
          </div>
        </div>
        <Couch className={styles.cardPhotos} />
      </div>
      <div className={`${styles.cardContainer} ${styles.cardGridGraphic}`}>
        <div className={`${styles.cardInfo} ${styles.cardBackgroundGraphic}`}>
          <GraphicSvg />
          <div className={styles.cardTextsGraphic}>
            <h2 className={`${styles.cardTitle}`}>Rendimentos</h2>
            <p
              className={`${styles.cardSubtitle} ${styles.cardSubtitleWidthGraphic}`}
            >
              Sua única tarefa será escolher o dia de receber seu pagamento.
            </p>
          </div>
        </div>
        <WomanLaptop className={styles.cardPhotos} />
      </div>
    </section>
  );
};

export default ProjectDetails;
