import styles from "./Select.module.css";

export default function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_manager}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>{options}</option>
      </select>
    </div>
  );
}
