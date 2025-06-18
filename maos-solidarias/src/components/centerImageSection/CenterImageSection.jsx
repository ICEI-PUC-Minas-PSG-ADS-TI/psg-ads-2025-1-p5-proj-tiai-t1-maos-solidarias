import React from 'react';
import styles from './centerImageSection.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from 'next/link';

const CenterImageSection = ({ title, description, showButton = true, image, align, mh = '50vh' }) => {
  return (
    <div className={styles.content} style={{ backgroundImage: `url(${image})`, alignItems: align, minHeight: mh }}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
        {showButton && <Link href={'/register'}><button className={styles.button}><MailOutlineIcon />Registrar como ONG</button></Link>}
      </div>
    </div>
  );
}

export default CenterImageSection;
