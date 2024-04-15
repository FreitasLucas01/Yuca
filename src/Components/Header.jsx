import React from "react";
import styles from "./Header.module.css";
import YukaSVG from "../Assets/yuka.svg?react";
import Button from "./Form/Button";

const Header = () => {
  return (
    <header>
      <div className={`${styles.headerContainer}`}>
        <YukaSVG />
        <Button style={{padding: '10px 0'}}>Quero investir</Button>
      </div>
    </header>
  );
};

export default Header;
