import bag from '../../../public/shopping-bag.png'
import styles from './styles.module.scss'

export default function Sac() {
  return (
    <div className={styles.container}>
      <div className={styles.container_div}>
        <div className={styles.container_div__bag}>
            <img src={bag} alt="" />
        </div>
        <div className={styles.container_div__text}>
            <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</p>
        </div>
      </div>
    </div>
  )
}
