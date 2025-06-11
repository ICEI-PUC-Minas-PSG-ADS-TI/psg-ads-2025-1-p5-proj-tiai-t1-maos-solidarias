// Footer.jsx
import React from 'react';
import styles from './footer.module.css';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <Image src={"/logo.png"} width={45} height={45} alt='Mãos Solidárias'></Image>
          Mãos Solidárias
        </div>
        <div className={styles.menu}>
        <Link href="/aboutus">Sobre nós</Link>  
        <Link href="/contact">Fale conosco</Link>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.copy}>
          © 2024 Brand, Inc. • Privacy • Terms • Sitemap
        </div>

        <div className={styles.socialIcons}>
          <XIcon />
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
