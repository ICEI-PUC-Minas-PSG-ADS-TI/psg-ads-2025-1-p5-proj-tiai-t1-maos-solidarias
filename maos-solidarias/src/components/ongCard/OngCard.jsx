'use client'

import React from 'react'
import styles from './ongcard.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import VerifiedIcon from '@mui/icons-material/Verified';

const OngCard = () => {
  const usuario = useSelector((state) => state.usuario);
  console.log(usuario.tags);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src="/ong-foto.png"
          alt="Imagem da ONG"
          width={180}
          height={180}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{usuario.nome || 'Nome da ONG'}</h2>
          {true && (
            <span className={styles.verified}>
              Ong Verificada <VerifiedIcon fontSize="small" />
            </span>
          )}
        </div>
        <p className={styles.info}>{usuario.endereco || 'Endereço não informado'}</p>
        <p className={styles.info}>{usuario.telefoneContato || 'Telefone não informado'}</p>
        <div className={styles.tags}>
            {usuario.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
        </div>
        <p className={styles.descricao}>
          {usuario.descricao}
        </p>
      </div>
    </div>
  )
}

export default OngCard
