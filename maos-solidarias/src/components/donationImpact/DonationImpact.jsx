'use client'

import React from 'react'
import styles from './donationImpact.module.css'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'

const dados = [
  {
    titulo: 'INICIATIVAS PARA SALVAR VIDAS',
    quantidade: '200+',
    imagem: '/impacto1.png',
  },
  {
    titulo: 'PROJETOS LANÇADOS',
    quantidade: '5+',
    imagem: '/impacto2.png',
  },
  {
    titulo: 'CERTIFICADOS DE APRECIAÇÃO',
    quantidade: '3',
    imagem: '/impacto3.png',
  },
  {
    titulo: 'AÇOES REALIZADAS',
    quantidade: '8+',
    imagem: '/donate3.png'
  }
]

const DonationImpact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Impacto da doação</h2>
      <p className={styles.subtitle}>Ações realizadas por meio de suas doações</p>

      <div className={styles.grid}>
        {dados.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <Image src={item.imagem} alt={item.titulo} width={220} height={130} className={styles.image} />
            <div className={styles.info}>
              <p className={styles.label}>{item.titulo}</p>
              <span className={styles.number}>{item.quantidade}</span>
            </div>
          </div>
        ))}

        <div className={styles.novoPost}>
          <AddIcon />
          <span>Adicionar Post</span>
        </div>
      </div>
    </div>
  )
}

export default DonationImpact
