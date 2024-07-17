import React from "react";
import styles from "./Copam.module.css";
import CopamGarnishSVG from "../img/copamGarnish.svg?react";
import Form from "./Form/Form";

const Copam = () => {
  return (
    <section className={`${styles.copamContainer}`}>
      <div className={`${styles.copamInfo}`}>
        <div>
          <CopamGarnishSVG className={`${styles.copamImg}`} />
        </div>
        <div>
          <h2 className={`${styles.copamTitle}`}>
            Quero investir no Fundo Yuca IV: Copam
          </h2>
          <p className={`${styles.copamSubtitle}`}>
            O time de especialistas da Yuca vai entrar em contato com você e
            explicar as vantagens de ter um ativo residencial para renda
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Copam;
