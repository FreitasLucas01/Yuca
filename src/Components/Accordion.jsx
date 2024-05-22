import React from "react";
import styles from "./Accordion.module.css";
import ArrowAccordion from "../Assets/arrowAccordion.svg?react";

const Accordion = ({ data }) => {
  const [selected, setSelected] = React.useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    // <div className={`${styles.wrapper}`}>
    <div className={`${styles.accordion}`}>
      {data.map((item, index) => (
        // <div className={`${styles.item}`}>
        <>
          <div className={`${styles.title}`} onClick={() => toggle(index)}>
            {item.question}
            <ArrowAccordion
              className={
                selected === index
                  ? `${styles.ArrowAccordion}`
                  : `${styles.ArrowAccordion} ${styles.show}`
              }
            />
          </div>
          <div
            className={
              selected === index
                ? `${styles.content} ${styles.show}`
                : `${styles.content}`
            }
          >
            {item.answer}
          </div>
          {/* </div> */}
        </>
      ))}
    </div>
    // </div>
  );
};

export default Accordion;
