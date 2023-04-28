import icon from '../../../public/burguer-icon.png'
import exit from '../../../public/exit.svg'
import search from '../../../public/search.svg'
import cart from '../../../public/cart.svg'
import styles from './styles.module.scss'
export default function HeaderHome() {
  return (
    <header>
        <img className={styles.icon} src={icon} alt="Icone Burguer Kenzie" />
        <div>
            <button><img src={search}/></button>
            <button><img src={cart}/></button>
            <button><img src={exit}/></button>
        </div>
    </header>
  )
}
