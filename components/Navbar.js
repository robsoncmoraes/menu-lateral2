import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navbar(){
    return (
        <ul className={styles.navbar}>
        <li>
          <Link href="/armazenamento">Armazenamento</Link>
        </li>
        <li>
          <Link href="/memoriaram">Memória Ram</Link>
        </li>
        <li>
          <Link href="/placadevideo">Placa de Video</Link>
        </li>
        <li>
          <Link href="/placamae">Placa Mãe</Link>
        </li>
        <li>
          <Link href="/processador">Processador</Link>
        </li>
       </ul>
    )

}