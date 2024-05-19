import React from "react";
import styles from "./Project.module.css";
import Button from "./Form/Button";
import FamilySvg from "../img/projectFamily.svg?react";
import BedSvg from "../img/projectBed.svg?react";

const Project = () => {
  return (
    <section className={`${styles.project}`}>
      <div className={`${styles.projectContainer}`}>
        <div className={`${styles.projectDetails}`}>
          <h2 className={`${styles.projectTitle}`}>Conheça o projeto</h2>
          <p className={`${styles.projectSubtitle}`}>Yuca IV: Edifício Copan</p>

          <div className={`${styles.projectStatus}`}>
            <p>Status: Ativa</p>
          </div>

          <ul className={`${styles.projectInfo}`}>
            <li className={`${styles.projectItem} ${styles.gridArea1}`}>
              <p className={`${styles.projectItemText}`}>
                Rentabilidade alvo (tir)
              </p>
              <p className={`${styles.projectItemNumber}`}>23,30% a.a</p>
            </li>
            <li className={`${styles.projectItem}  ${styles.gridArea2}`}>
              <p className={`${styles.projectItemText}`}>Valor captado</p>
              <p className={`${styles.projectItemNumber}`}>R$ 580.000,00</p>
            </li>
            <li className={`${styles.projectItem} ${styles.gridArea3}`}>
              <p className={`${styles.projectItemText}`}>Participação </p>
              <p className={`${styles.projectItemNumber}`}>1.3378% por cota</p>
            </li>
            <li className={`${styles.projectItem} ${styles.gridArea4}`}>
              <p className={`${styles.projectItemText}`}>Valor da cota</p>
              <p className={`${styles.projectItemNumber}`}>R$ 25.000,00</p>
            </li>
            <Button
              style={{
                width: "100%",
                gridColumn: "1/-1",
                font: "var(--font-weight-600) var(--font-size-big) / 1 var(--font-sans)",
                padding: "15px 0",
                background: "var(--color-darker)",
              }}
            >
              Quero investir
            </Button>
          </ul>
        </div>
        <FamilySvg className={`${styles.projectImg}`} />
        <BedSvg className={`${styles.projectImg}`} />
        <div className={`${styles.projectTexts}`}>
          <p>
            Nesta captação investidores serão sócios da Yuca em uma empresa que
            será proprietária de 02 apartamentos de 110 m² no Edifício Copan, um
            dos mais famosos prédios do país, situado centro de São Paulo.{" "}
          </p>
          <p>
            Os apartamentos serão reformados, mobiliados e equipados, para
            posterior locação de seus quartos. Cada um deles possuia 4 quartos e
            4 banheiros.{" "}
          </p>
          <p>
            O aluguel de cada quarto mobiliado e equipado irá variar de R$ 2.600
            a R$ 3.070, valor que já inclui condomínio, IPTU, serviço de limpeza
            e internet. Estes valores estão cerca de 30% abaixo do valor de
            aluguel de um apartamento de um quarto (25-40 m²) na região.
          </p>
          <a href="#">Veja o projeto completo</a>
        </div>
      </div>
    </section>
  );
};

export default Project;
