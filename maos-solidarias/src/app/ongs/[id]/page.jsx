'use client'

import React from 'react'
import styles from './page.module.css'
import OngCard from '../../../components/ongCard/OngCard'
import DonationImpact from '../../../components/donationImpact/DonationImpact'
import { useSelector } from 'react-redux'

const OngPage = () => {
   const usuario = useSelector((state) => state.usuario);

  return (
    <div className={styles.container}>
      <OngCard usuario={usuario}/>
      <DonationImpact />
    </div>
  )
}

export default OngPage;