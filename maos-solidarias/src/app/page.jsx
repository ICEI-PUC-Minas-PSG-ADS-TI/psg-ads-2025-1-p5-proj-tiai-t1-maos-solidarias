import StepsSection from "@/components/stepsSection/StepsSection";
import styles from "./page.module.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Receba ajuda hoje</h1>
        <p className={styles.description}>Junte-se à nossa plataforma para ampliar seu impacto e se conectar com apoiadores no mundo todo.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}><MailOutlineIcon />Registrar como ONG</button>
        </div>
      </div>
      <StepsSection />
    </div>
  );
}
