import React from "react";
import styles from "./Banner.module.css";
import BuildingSvg from "../img/building.svg?react";
import BrazilJournalSvg from "../img/brazilJournal.svg?react";
import ExameSvg from "../img/exame.svg?react";
import InfoMoneySvg from "../img/infoMoney.svg?react";
import InvestingSvg from "../img/investing.svg?react";
import Button from "./Form/Button";

const Banner = () => {
  return (
    <section className={`${styles.banner}`}>
      <div className={`${styles.bannerInfo}`}>
        <h1 className={`${styles.bannerTitle}`}>
          Invista com quem mais inova no setor imobiliário
        </h1>
        <p className={`${styles.bannerSubtitle}`}>
          Conheça o mais novo empreendimento da Yuca no Edifício Copan e invista
          a partir de R$ 10.000
        </p>
        <Button
          style={{
            width: "100%",
            font: "var(--font-weight-600) var(--font-size-big) / 1 var(--font-sans)",
            padding: "15px 0",
            background: "var(--color-darker)",
            marginBottom: "58px",
          }}
        >
          Quero Investir
        </Button>
        <div className={`${styles.bannerCompanies}`}>
          <BrazilJournalSvg />
          <ExameSvg />
          <InfoMoneySvg />
          <InvestingSvg />
        </div>
      </div>
      <BuildingSvg className={`${styles.bannerImg}`} />
    </section>
  );
};

export default Banner;
