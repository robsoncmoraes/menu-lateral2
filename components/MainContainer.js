import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

export default function MainContainer({children}) {
    return(
        <>
          <Header/>
          <Navbar/>
          <div>{children}</div>
          <Footer/>
        </>

        
    )
}