import "../styles/globals.css";
import Menu from "../components/Menu";
import Content from "../components/Content";
import Component from "next"


function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Menu/>
      <Component {...pageProps} />
      <Content> <Component/> </Content>
    </div>
  );
}

export default MyApp;
