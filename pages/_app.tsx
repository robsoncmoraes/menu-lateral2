import "../styles/globals.css";
import Menu from "../components/Menu";
import Content from "../components/Content";
import Submenu from "../components/Submenu";
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Menu />

      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer/>
      
    </div>
  );
}

export default MyApp;
