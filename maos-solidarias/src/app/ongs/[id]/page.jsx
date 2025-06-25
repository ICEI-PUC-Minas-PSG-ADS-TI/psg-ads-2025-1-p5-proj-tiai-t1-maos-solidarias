import React from 'react'
import styles from './page.module.css'
import OngCard from '../../../components/ongCard/OngCard'
import DonationImpact from '../../../components/donationImpact/DonationImpact'


const OngPage = () => {
  return (
    <div className={styles.container}>
      <OngCard/>
      <DonationImpact />
    </div>
  )
}

export default OngPage;