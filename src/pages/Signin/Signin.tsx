import header from '../../../public/burguer-icon.png'
import Form from '../../components/Form/Form'
import Sac from '../../components/Sac/Sac'
import styles from './styles.module.scss'
import cicles from '../../../public/circles.png'
export default function Signin() {
  return (
    <div className={styles.main}>
      <div className={styles.main_container1}>
        <div className={styles.main_container1__div}>
          <img src={header} alt="Imagem de logo" />
          <Sac/>
        </div>
        <div className={styles.main_container1__circles}>
          <img src={cicles} alt="Circulos decorativos" />
        </div>
      </div>
      <div className={styles.main_container2}>
        <Form state={'signin'}/>
      </div>
    </div>
  )
}
 