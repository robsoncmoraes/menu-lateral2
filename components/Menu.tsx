import styles from "./Menu.module.css";
import Submenu from "./Submenu";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Item from "./Item";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className="logo">
        <Image src={logo} alt="logomarca" width={80} height={60} />
        InfoBR{" "}
      </div>

      <ul className="menu">
        <Submenu title="Armazenamento">
          <Item title={"HDD"} path="/armazenamento/hdd" />
          <Item title={"SSD"} path="/armazenamento/ssd" />
        </Submenu>

        <Submenu title="Placa de Vídeo">
          <Item title="AMD" path="/placadevideo/amd" />
          <Item title="Nvidia" path="/placadevideo/nvidia" />
        </Submenu>

        <Submenu title="Placa Mãe">
          <Item title="Intel" path="/placamae/intel" />
          <Item title="Amd" path="/placamae/amd" />
          <Item title="Gigabyte" path="/placamae/gigabyte" />
        </Submenu>

        <Submenu title="Memória RAM">
          <Item title="Sandisk" path="/memoriaram/sandisk" />
          <Item title="Kingston" path="/memoriaram/kingston" />
        </Submenu>

        <Submenu title="Processador">
          <Item title="Intel" path="/processador/intel" />
          <Item title="AMD" path="/processador/amd" />
        </Submenu>
      </ul>
    </div>
  );
}
