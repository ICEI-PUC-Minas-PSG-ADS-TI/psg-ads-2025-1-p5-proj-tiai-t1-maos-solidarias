'use client'

import { useState } from 'react'
import styles from './page.module.css'


const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [shake, setShake] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === 'Biel' && senha === 'biel') {
      setLoginError(false)
      setShake(false)
      alert('Login bem-sucedido!')
    } else {
      setLoginError(true)
      setShake(true)
      setTimeout(() => setShake(false), 400)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label className={`${loginError ? styles.errorLabel : ''} ${shake ? styles.shake : ''}`}>
              Login
            </label>
            <input
              type="text"
              placeholder="Digite seu login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={`${loginError ? styles.errorLabel : ''} ${shake ? styles.shake : ''}`}>
              Senha
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
