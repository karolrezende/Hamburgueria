import { useCartContext } from "../../providers/ProviderHome"
import { iProducts } from "../../providers/ProviderHome"
import Product from "../Product/Product"
import styles from './styles.module.scss'
export default function Card() {
  const {products} = useCartContext()
  return (
    <div className={styles.div}>
      {products.length !== undefined ? products.map((hamburguer: iProducts)=> <Product key={hamburguer.id} hamburguer={hamburguer}/>) : ''}
    </div>
  )
}
