import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1>Fabricantes</h1>
        <button className={styles.newManufacturer}>Novo Fabricante</button>
      </div>
    </>
  );
}
