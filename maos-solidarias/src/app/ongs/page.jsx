import styles from './page.module.css'
import OngsList from '../../components/ongsList/OngsList'

const Ongs = () => {
    return (
        <div className={styles.container}>
           <OngsList />
        </div>
    )
}

export default Ongs;