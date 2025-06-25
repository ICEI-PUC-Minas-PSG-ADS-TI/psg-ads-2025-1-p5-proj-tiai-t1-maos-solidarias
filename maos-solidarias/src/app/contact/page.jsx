import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button/Button";

export const metadata = {
  title: "Mãos solidárias",
  description: "Pagina de contato",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entre em contato com a gente!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="nome" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="mensagem"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Enviar"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;