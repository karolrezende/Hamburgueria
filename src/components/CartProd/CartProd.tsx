import trash from '../../../public/trash.svg'
import { iProducts } from '../../providers/ProviderHome'
import styles from './styles.module.scss'
interface iProp{
  prod: iProducts
}
export default function CartProd({prod}: iProp) {
  return (
    <div className={styles.burguer}>
        <div className={styles.burguer_mr}>
          <div className={styles.burguer_mr_1}>
          <img src={prod.img} alt="Imagem do produto" className={styles.burguer_mr_1__img1} />
            <div className={styles.burguer_mr_1__div}>
              <h2>{prod.name}</h2>
              <div>algo</div>
            </div>
          </div>
          <img src={trash} alt="" className={styles.burguer_mr__img2}/>
        </div>
    </div>
  )
}
