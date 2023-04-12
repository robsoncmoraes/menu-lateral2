import styles from "./Submitbutton.module.css";

export default function Submitbutton({ text, onClick }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}
