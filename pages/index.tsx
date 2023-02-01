import Head from "next/head";
import Image from "next/image";
import Content from "../components/Content";
import Menu from "../components/Menu";

import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      <Menu />
      <Content />
      <h1>InfoBR</h1>
    </div>
  );
}
