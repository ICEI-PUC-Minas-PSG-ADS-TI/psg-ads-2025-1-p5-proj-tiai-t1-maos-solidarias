import StepsSection from "@/components/stepsSection/StepsSection";
import styles from "./page.module.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BenefitSection from "@/components/benefitSection/BenefitsSections";
import { ongsSectionData, benefitsSectionData, donorsSectionData, donationsData } from "./types";
import DonationFeed from "@/components/donationFeed/DonationFeed";

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
      <StepsSection steps={ongsSectionData} title={"Como funciona para ONGs"}/>
      <BenefitSection steps={benefitsSectionData} />
      <StepsSection steps={donorsSectionData} title={"Como funciona para Doadores"} />
      <DonationFeed donations={donationsData} />
    </div>
  );
}
