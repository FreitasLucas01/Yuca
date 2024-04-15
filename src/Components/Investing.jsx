import React from "react";
import styles from "./Investing.module.css";
import ArrowSvg from "../img/investingArrow.svg?react";
import WalletSvg from "../img/investingWallet.svg?react";
import CoinSvg from "../img/investingCoin.svg?react";

const Investing = () => {
  return (
    <section className={`${styles.investing}`}>
      <div className={`${styles.investingInfo}`}>
        <h1 className={`${styles.investingTitle}`}>
          Investir em imóveis pode ser simples.
        </h1>
        <p className={`${styles.investingSubtitle}`}>
          A Yuca conecta você às melhores oportunidades de investimento de renda
          residencial. Não importa se você já investe no setor imobiliário ou se
          quer começar agora.
        </p>
      </div>
      <ul className={`${styles.wrapper}`}>
        <li className={`${styles.wrapperList}`}>
          <ArrowSvg />
          <h4 className={`${styles.wrapperTitle} ${styles.wrapperTitleSmaller}`}>Investimento seguro e lucrativo</h4>
          <p className={`${styles.wrapperText}`}>
            Imóveis com alta taxa de ocupação em localizações estratégicas,
            reformados e expostos à valorização imobiliária.
          </p>
        </li>
        <li className={`${styles.wrapperList}`}>
          <WalletSvg />
          <h4 className={`${styles.wrapperTitle}`}>Sua carteira com estabilidade e liquidez</h4>
          <p className={`${styles.wrapperText} ${styles.wrapperTextSmaller}`}>
            Moradia é uma necessidade básica. A Yuca oferece oportunidades
            reais, estáveis e boas para diversificação
          </p>
        </li>
        <li className={`${styles.wrapperList}`}>
          <CoinSvg />
          <h4 className={`${styles.wrapperTitle}`}>Excelente retorno financeiro</h4>
          <p className={`${styles.wrapperText}`}>
            Rendimentos mensais sem esforços, gerados a partir de operações
            mantidas 100% pela Yuca.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Investing;
