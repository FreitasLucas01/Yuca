import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, id, onChange, error, ...props }) => {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className={`${styles.wrapper}`}>
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        label={label}
        id={id}
        className={`${styles.input}`}
        onChange={onChange}
        onBlur={handleFocus}
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
        required
      />
      <span className={`${styles.error}`}>{error}</span>
    </div>
  );
};

export default Input;
