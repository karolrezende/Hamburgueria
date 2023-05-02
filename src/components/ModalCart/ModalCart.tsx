import styles from './styles.module.scss'
import Button from '../Button/Button'
import { iProducts, useCartContext } from '../../providers/ProviderHome'
import CartProd from '../CartProd/CartProd'

export default function ModalCart({setModal}: any) {
  const {cart, total, cleanCart} = useCartContext()
  return (
    <div className={styles.container}>
      <div className={styles.container_modal}>
          <header>
            <div className={styles.container_modal_mr1}>
              <h3>Carrinho</h3>
              <button onClick={()=> setModal()}>X</button>
            </div>
          </header>
          <div className={styles.container_modal_mr}>
            <div className={styles.container_modal_mr__cart}>
              {cart.length != 0 ? cart.map((prod :iProducts)=><CartProd key={prod.id} prod={prod}/>) : <div className={styles.empty}>Carrinho vazio</div>}
            </div>
            <div className={styles.container_modal_mr__total}>
              <p>Total</p>
              <p>R$ {total},00</p>
            </div>
            <div className={styles.container_modal_mr__button} onClick={()=> cleanCart()}>
              <Button color= "#E0E0E0" fontColor='#828282' hover='#E0E0E0'>Remover Tudo</Button>
            </div>
          </div>
      </div>
    </div>
  )
}
