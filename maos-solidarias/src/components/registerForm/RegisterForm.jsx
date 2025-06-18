import React from 'react';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastre-se</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <div className={styles.inputField}>
            <label>Nome da Ong*</label>
            <input type="text" placeholder="Entre com o nome da ONG" required />
          </div>
          <div className={styles.inputField}>
            <label>Área de atuação</label>
            <input type="text" placeholder="Área de atuação" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputField}>
            <label>CNPJ</label>
            <input type="text" placeholder="Entre com CNPJ" />
          </div>
          <div className={styles.inputField}>
            <label>Endereço completo</label>
            <input type="text" placeholder="Entre com seu endereço" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputField}>
            <label>Email</label>
            <input type="email" placeholder="Entre com seu e-mail" />
          </div>
          <div className={styles.inputField}>
            <label>Responsável Legal</label>
            <input type="text" placeholder="Entre com nome do responsável" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputField}>
            <label>Senha</label>
            <input type="password" placeholder="********" />
          </div>
          <div className={styles.inputField}>
            <label>CPF/CNPJ do responsável legal</label>
            <input type="text" placeholder="Entre com os dados" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputField}>
            <label>Confirmar senha</label>
            <input type="password" placeholder="********" />
          </div>
          <div className={styles.inputField}>
            <label>Telefone de contato</label>
            <input type="text" placeholder="Entre com telefone para contato" />
          </div>
        </div>

        <button type="submit" className={styles.button}>Criar Perfil</button>
      </form>
    </div>
  );
};

export default RegisterForm;
