import styles from "./stepsSection.module.css";

const StepsSection = ({ steps, title }) => {
    return (
        <div className={styles.stepsSection}>
            <h2>{title}</h2>
            <div className={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                        <span className={styles.icon}>{step.icon}</span>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepsSection;
