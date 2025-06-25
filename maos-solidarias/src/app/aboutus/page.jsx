import CenterImageSection from '../../components/centerImageSection/CenterImageSection'
import styles from './page.module.css'
import AboutSection from '../../components/aboutSection/AboutSection'

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <CenterImageSection image={'/image.png'} showButton={false}/>
      <AboutSection />
    </div>
  )
} 

export default AboutUs