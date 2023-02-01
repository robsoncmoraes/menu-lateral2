import Head from "next/head";
import Image from "next/image";
import Content from "../components/Content";
import Footer from "../components/Footer"

import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      
      <Content />
      <h1>InfoBR</h1>
      <Footer/>
    </div>
  );
}
