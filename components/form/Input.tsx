import styles from "./Input.module.css";

export default function Input({
  type,
  text,
  name,
  placeholder,
  value,
  handleOnChange,
  label,
  register,
  errors,
}) {
  return (
    <div className={styles.form_manager}>
      <label htmlFor={name}>{text}</label>
      <input
        label={label}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        {...register(name, { required: true })}
      />
      {errors[name]?.type === "required" && (
        <p className="error-message">{label} é obrigatório</p>
      )}
    </div>
  );
}
