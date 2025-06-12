import styles from "./stepsSection.module.css"

const StepsSection = () => {
    return (
    <div className={styles.stepsSection}>
        <h2>Como funciona para ONGs</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <span className={styles.icon}>📝</span>
            <h3>Registro</h3>
            <p>Como uma organização sem fins lucrativos, você pode se registrar como proprietário de um perfil.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.icon}>🗂️</span>
            <h3>Crie seu perfil exclusivo</h3>
            <p>Adicione conteúdo envolvente e recursos visuais cativantes para mostrar a missão da sua ONG.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.icon}>✅</span>
            <h3>Verifique o status da sua ONG</h3>
            <p>Passe pelo processo de verificação para garantir a autenticidade.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.icon}>🌐</span>
            <h3>Publique e torne-se global</h3>
            <p>Após a verificação, publique seu perfil para torná-lo visível em nossa rede.</p>
          </div>
        </div>
    </div>
    )
}

export default StepsSection;
    