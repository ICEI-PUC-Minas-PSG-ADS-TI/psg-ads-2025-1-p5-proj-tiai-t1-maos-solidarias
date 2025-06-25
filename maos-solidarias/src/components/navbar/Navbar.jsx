'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import PersonIcon from '@mui/icons-material/Person'
import LoginIcon from '@mui/icons-material/Login';
import Image from 'next/image';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import { useSelector, useDispatch } from 'react-redux'
import { resetarFormulario } from '../../app/lib/slices/usuarioSlice'

const Navbar = () => {
  const pathname = usePathname()
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.usuario);

  const handleLogout = () => {
    dispatch(resetarFormulario())
  }

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
      </div>

      <div className={styles.links}>
        <Link href="/doacao" className={`${styles.button} ${styles.outline}`}>
          <VolunteerActivismIcon />
          Doação segura
        </Link>
        {usuario.nome === '' && <Link href="/register" className={`${styles.button} ${styles.filled}`}>
          <PersonIcon />
          Cadastre-se
        </Link>}
        {usuario.nome === '' && <Link href="/login" className={`${styles.button} ${styles.filled}`}><LoginIcon />Login</Link>}
        {usuario.nome !== '' && <Link href={`/ongs/${usuario.id}`} className={`${styles.button} ${styles.filled}`}><Person2Icon/>Profile</Link>}
        {usuario.nome !== '' && <Link href="/login" className={`${styles.button} ${styles.filled}`} onClick={handleLogout}><LogoutIcon />Logout</Link>}
      </div>
    </div>
  )
}

export default Navbar
