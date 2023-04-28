import { iProducts } from '../../providers/ProviderHome'
import Button from '../Button/Button'
import styles from './styles.module.scss'

interface iPropProduct{
  hamburguer: iProducts
}
export default function Product({hamburguer}: iPropProduct) {
  return (
      <div className={styles.div}>
          <div className={styles.div__img}>
            <img src={hamburguer.img} alt="Imagem do produto" />
          </div>
          <div className={styles.div__container}> 
            <h2>{hamburguer.name}</h2>
            <p>{hamburguer.category}</p>
            <span >R$ {hamburguer.price}</span>
            <div className={styles.div__container_button}>
              <Button color='#BDBDBD' fontColor='#ffffff' hover='#27AE60'>Adicionar</Button>
            </div>
          </div>
      </div>
  )
}
