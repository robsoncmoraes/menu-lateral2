import Link from "next/link";
import styles from "./Newmanufacturer.module.css";
import Formmanufacturer from "../form/formmanufacturer";

export default function Newmanufacturer() {
  return (
    <>
      <div className={styles.newManufacturer}>
        <h1>Fabricantes</h1>
        <div className={styles.alignButton}>
          <Link href="../../cadastro/fabricantes/newmanufacturer">
            <button className={styles.cancelManufacturer}>Cancelar</button>
          </Link>
        </div>
        <div>
          <Link href="../../cadastro/fabricantes/newmanufacturer">
            <button className={styles.saveManufacturer}>
              Salvar Fabricante
            </button>
          </Link>
        </div>
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
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(94, 94, 94)",
            fontSize: 15,
          }}
          href="/cadastro/fabricantes/newmanufacturer"
        >
          &ensp;/Novo Fabricante
        </Link>
      </div>
      <div>
        <Formmanufacturer />
      </div>
    </>
  );
}
