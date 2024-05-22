import React from "react";
import styles from "./Doubts.module.css";
import Accordion from "./Accordion";

const Doubts = () => {
  const data = [
    {
      question: "Como são feitas as captações via crowdfunding?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab expedita quos a omnis, vel iusto itaque aut iste impedit cum voluptatum quidem laudantium totam necessitatibus ullam eveniet magni repellendus",
    },
    {
      question:
        "O que faz a Yuca acreditar na valorização imobiliária e, consequentemente, na entrega do rentorno projetado?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab expedita quos a omnis, vel iusto itaque aut iste impedit cum voluptatum quidem laudantium totam necessitatibus ullam eveniet magni repellendus",
    },
    {
      question: "Quais são os riscos de perda envolvendo este investimento?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab expedita quos a omnis, vel iusto itaque aut iste impedit cum voluptatum quidem laudantium totam necessitatibus ullam eveniet magni repellendus",
    },
    {
      question: "A Yuca tem soluções para incorporadoras?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab expedita quos a omnis, vel iusto itaque aut iste impedit cum voluptatum quidem laudantium totam necessitatibus ullam eveniet magni repellendus",
    },
  ];

  return (
    <section className={`${styles.doubts}`}>
      <h2 className={`${styles.doubtsTitle}`}>Dúvidas frequentes</h2>
      <Accordion data={data} />
    </section>
  );
};

export default Doubts;
