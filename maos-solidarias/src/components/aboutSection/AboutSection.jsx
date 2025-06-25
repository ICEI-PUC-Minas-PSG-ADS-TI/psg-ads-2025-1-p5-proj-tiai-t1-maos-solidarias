import styles from './aboutSection.module.css'

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Sobre Nós</h2>
      <p className={styles.description}>
        Milos Solidárias é uma plataforma de doação para conectar organizações não-governamentais (ONGs) com doadores.
        Criamos maneiras de desenvolvimento para gerar um impacto social positivo.
      </p>

      <div className={styles.grid}>
        <div>
          <h3>Nossa Missão</h3>
          <p>
            Fortalecer o trabalho das ONGs oferecendo uma plataforma eficiente e segura.
          </p>
        </div>
        <div>
          <h3>Nossa Visão</h3>
          <p>
            Um futuro em que todas as ONGs tenham acesso aos recursos para alcançar seus objetivos e transformar comunidades.
          </p>
        </div>
        <div>
          <h3>Nossos Valores</h3>
          <ul>
            <li>Transparência</li>
            <li>Compromisso com as causas sociais</li>
            <li>Integridade</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
