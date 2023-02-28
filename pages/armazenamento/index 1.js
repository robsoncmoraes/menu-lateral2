import Link from 'next/link'

export default function Armazenamento (){
    return (
    <>
       <h1>Armazenamento</h1>
       <button><Link href="/">Voltar</Link></button>
       <ul>
       <li><Link href="/hdd">HDD</Link></li>
       <li><Link href="/ssd">SSD</Link></li>
       </ul>
    </>

    )
}