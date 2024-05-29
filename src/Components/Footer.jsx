import React from "react";
import styles from "./Footer.module.css";
import YukaSVG from "../Assets/yuka.svg?react";

const Footer = () => {
  return (
    <section className={`${styles.footer}`}>
      <ul className={`${styles.footerList}`}>
        <li>
          <YukaSVG />
        </li>
        <li>
          <a href="#">Documentos jurídicos</a>
        </li>
        <li>
          <a href="#">Termos de serviço</a>
        </li>
        <li>
          <a href="#">Política de privacidade</a>
        </li>
        <li>
          <a href="#">Autorização CVM</a>
        </li>
      </ul>
      <p className={`${styles.footerText}`}>Yuca Comunidade e Tecnologia Ltda @ 2020 CNPJ: 34.399.713/0001-90</p>
    </section>
  );
};

export default Footer;
