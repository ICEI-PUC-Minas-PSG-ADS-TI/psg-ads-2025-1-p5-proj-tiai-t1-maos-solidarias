import styles from "./benefitsSection.module.css";

const BenefitSection = ({ steps, title }) => {
    return (
        <div className={styles.stepsSection}>
            <h2>{title}</h2>
            <div className={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                        <div className={styles.titleWithIcon}>
                            <span className={styles.icon}>{step.icon}</span>
                            <h3>{step.title}</h3>
                        </div>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BenefitSection;
