import StepsSection from "../components/stepsSection/StepsSection";
import styles from "./page.module.css";
import BenefitSection from "../components/benefitSection/BenefitsSections";
import { ongsSectionData, benefitsSectionData, donorsSectionData, donationsData } from "./types";
import DonationFeed from "../components/donationFeed/DonationFeed";
import CenterImageSection from "../components/centerImageSection/CenterImageSection"

export default function Home() {
  return (
    <div className={styles.container}>
      <CenterImageSection 
        description={'Junte-se à nossa plataforma para ampliar seu impacto e se conectar com apoiadores no mundo todo.'} 
        title={'Receba ajuda hoje'}
        image={`/home.png`}
        />
      <StepsSection steps={ongsSectionData} title={"Como funciona para ONGs"}/>
      <BenefitSection steps={benefitsSectionData} />
      <StepsSection steps={donorsSectionData} title={"Como funciona para Doadores"} />
      <DonationFeed donations={donationsData} />
    </div>
  );
}
