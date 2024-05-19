/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import styles from "./Form.module.css";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    phone: "",
    email: "",
    invest: "",
  });

  const inputs = [
    {
      key: 1,
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Insira seu nome",
      error: "Preencha sem uso de caracteres especiais ou números",
      label: "Nome Completo",
      pattern: `^[a-zA-zÀ-ÿ ]*$`,
    },
    {
      key: 2,
      id: "phone",
      name: "phone",
      type: "text",
      placeholder: "Insira seu número com DDD",
      error: "Número de telefone inválido",
      label: "Telefone",
      pattern: `^[0-9]{10,11}$`,
    },
    {
      key: 3,
      id: "email",
      name: "email",
      type: "email",
      placeholder: "exemplo@yuca.com",
      error: "Preencha com um endereço de email válido",
      label: "Email",
      pattern: `/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`,
    },
    {
      key: 4,
      id: "invest",
      name: "invest",
      type: "text",
      placeholder: "Quanto pretende investir?",
      error: "Preencha o valor corretamente",
      label: "Quanto pretende investir?",
      pattern: `^\\$?(([1-9](\\d*|\\d{0,2}(.\\d{3})*))|0)(,\\d{1,2})?$`,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      {inputs.map((input) => (
        <Input
          key={input.key}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <Button
        style={{
          display: "block",
          width: "100%",
          maxWidth: "387px",
          marginInline: "auto",
          marginTop: "48px",
          font: "var(--font-weight-600) var(--font-size-small) / 1.2 var(--font-sans)",
          padding: "10px 0",
          background: "var(--color-dark)",
        }}
      >
        Quero investir
      </Button>
    </form>
  );
};

export default Form;
