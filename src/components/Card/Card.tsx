import { useCartContext } from "../../providers/ProviderHome"
import { iProducts } from "../../providers/ProviderHome"
import Product from "../Product/Product"
import styles from './styles.module.scss'
export default function Card() {
  const {products} = useCartContext()
  console.log(products)
  return (
    <div className={styles.div}>
      {products ? products.map((hamburguer: iProducts)=> <Product hamburguer={hamburguer}/>) : ''}
    </div>
  )
}
