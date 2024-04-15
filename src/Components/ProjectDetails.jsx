import React from "react";
import styles from "./ProjectDetails.module.css";
import BlocksSvg from "../Assets/blocks-icon.svg?react";
import GraphicSvg from "../Assets/graphic-icon.svg?react";
import HouseSvg from "../Assets/house-icon.svg?react";
import InvestingSvg from "../Assets/investing-icon.svg?react";

const ProjectDetails = () => {
  return (
    <section className={`${styles.projectDetails}`}>
      <div>
        <div className={`${styles.projectDetailsTexts}`}>
          <h1 className={`${styles.projectDetailsTitle}`}>Como funciona</h1>
          <p className={`${styles.projectDetailsSubtitle}`}>
            A Yuca cuida de tudo: analisa, compra, reforma, aluga e gerencia.
            Você só investe e vê seu dinheiro render.
          </p>
        </div>
        <div
          className={`${styles.cardBackground} ${styles.cardBackgroundManLaptop}`}
        >
          <div
            className={`${styles.cardContainer} ${styles.cardContainerColor2}`}
          >
            <BlocksSvg className={`${styles.cardImg}`} />
            <div className={`${styles.card}`}>
              <h4 className={`${styles.cardTitle}`}>Gestão da locação</h4>
              <p className={`${styles.cardText}`}>
                Divulgamos o apto em nossa própria plataforma para mais de 3k
                interessados em longa estadia. Selecionamos e atendemos os
                inquilinos, assumindo as cobranças.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.cardBackground} ${styles.cardBackgroundBed}`}>
          <div
            className={`${styles.cardContainer} ${styles.cardContainerColor4}`}
          >
            <HouseSvg className={`${styles.cardImg}`} />
            <div className={`${styles.card}`}>
              <h4 className={`${styles.cardTitle}`}>Reforma e manutenção</h4>
              <p className={`${styles.cardText}`}>
                Arquitetos e engenheiros da Yuca fazem o projeto de valorização,
                gerenciam a reforma com o melhor custo de obra e realizam todas
                as manutenções preventivas e corretivas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className={`${styles.cardBackground} ${styles.cardBackgroundCouch}`}
        >
          <div
            className={`${styles.cardContainer} ${styles.cardContainerColor1}`}
          >
            <InvestingSvg className={`${styles.cardImg}`} />
            <div className={`${styles.card}`}>
              <h4 className={`${styles.cardTitle}`}>
                Oportunidades de investimento
              </h4>
              <p className={`${styles.cardText}`}>
                Nossos especialistas identificam ativos reais, estáveis e bons
                para diversificação. Analisamos juridicamente e agilizamos o
                processo de aquisição para você.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.cardBackground} ${styles.cardBackgroundWomanLaptop}`}
        >
          <div
            className={`${styles.cardContainer} ${styles.cardContainerSmaller} ${styles.cardContainerColor3}`}
          >
            <GraphicSvg className={`${styles.cardImg}`} />
            <div className={`${styles.card}`}>
              <h4 className={`${styles.cardTitle}`}>Rendimentos</h4>
              <p className={`${styles.cardText}`}>
                Sua única tarefa será escolher o dia de receber seu pagamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
