'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import PersonIcon from '@mui/icons-material/Person'
import LoginIcon from '@mui/icons-material/Login';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image';



const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <Image src={"/logo.png"} width={30} height={30} alt='Mãos Solidárias'></Image>
      <Link href="/" className={styles.logo}>
        Mãos Solidárias
      </Link>
      </div>
      <div className={styles.leftLinks}>
        <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
        <Link href="/ongs" className={`${styles.link} ${pathname === '/ongs' ? styles.active : ''}`}>
          Ongs
        </Link>
        <Link href="/donors" className={`${styles.link} ${pathname === '/donors' ? styles.active : ''}`}>
          Doadores
        </Link>
      </div>

      <div className={styles.links}>
        <Link href="/doacao" className={`${styles.button} ${styles.outline}`}>
          <CheckIcon />
          Doação segura
        </Link>
        <Link href="/register" className={`${styles.button} ${styles.filled}`}>
          <PersonIcon />
          Cadastre-se
        </Link>
        <Link href="/login" className={`${styles.button} ${styles.filled}`}><LoginIcon />Login</Link>
      </div>
    </div>
  )
}

export default Navbar
