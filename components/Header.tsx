import Link from "next/link";
import styles from "./Header.module.css";
import Table from "./Table";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1>Fabricantes</h1>
        <Link href="../../cadastro/fabricantes/novofabricante">
          <button className={styles.newManufacturer}>Novo Fabricante</button>
        </Link>
      </div>
      <div>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(94, 94, 94)",
            fontSize: 15,
          }}
          href="/cadastro"
        >
          Cadastro
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(94, 94, 94)",
            fontSize: 15,
          }}
          href="/cadastro/fabricantes"
        >
          &ensp;/Fabricantes
        </Link>
      </div>
      <Table />
    </>
  );
}
