import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import Styles from '../styles/Home.module.css'

export default function Home () {
  return (
     <div className={Styles.container}>
      <Navbar/>
       <h1>InfoBR</h1>
     </div>
  )
}
