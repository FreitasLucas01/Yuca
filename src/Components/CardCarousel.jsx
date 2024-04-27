import React from "react";
import styles from "./CardCarousel.module.css";

export default function CardCarousel({ url, name, role, description }) {
  return (
    <div className={`${styles.card}`}>
      <span className={`${styles.cardImg}`}>{url}</span>
      <ul className={`${styles.cardNameRole}`}>
        <li>{name}</li>
        <li>{role}</li>
      </ul>
      <p className={`${styles.cardInfo}`}>{description}</p>
    </div>
  );
}
