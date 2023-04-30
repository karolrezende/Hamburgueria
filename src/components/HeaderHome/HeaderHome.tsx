import icon from '../../../public/burguer-icon.png'
import exit from '../../../public/exit.svg'
import search from '../../../public/search.svg'
import cart from '../../../public/cart.svg'
import styles from './styles.module.scss'
import { useState } from 'react'
import ModalCart from '../ModalCart/ModalCart'
export default function HeaderHome() {
  const [modal, setModal] = useState(false)

  return (
    <header>
        <img className={styles.icon} src={icon} alt="Icone Burguer Kenzie" />
        <div>
            <button className={styles.button}><img src={search}/></button>
            <button onClick={()=> setModal(true)} className={styles.button}><img src={cart}/></button>
            <button className={styles.button}><img src={exit}/></button>
        </div>
        {modal ? <ModalCart setModal={setModal}/> : ''}
    </header>
  )
}
