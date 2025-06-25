'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUsuario } from '../../lib/slices/usuarioSlice'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [shake, setShake] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()

    if (email === 'Biel' && senha === 'biel') {
      setLoginError(false)
      router.push('/')
      setShake(false)
      dispatch(setUsuario({
        id: '1',
        nome: 'Crianças na tecnologia',
        areaAtuacao: 'Gamers',
        cnpj: '49.091.737/0001-56',
        endereco: 'Alameda Braúna 94, Condomínio Rosa dos Ventos',
        email: 'gabriel.teste@gmail.com',
        responsavelLegal: 'Gabriel Arthur',
        cpfCnpjResponsavel: '17221747652',
        telefoneContato: '(31)99416-7235',
        senha: 'biel',
        confirmarSenha: 'biel',
        descricao: 'Na Ong Crianças na tecnologia, acreditamos que toda criança merece a chance de explorar o mundo da tecnologia. Levamos conhecimento e oportunidades a comunidades carentes, despertando nas crianças a curiosidade, a criatividade e o poder de transformar seus próprios futuros através da educação digital.',
        tags: ['Tecnologia', 'Crianças', 'Educação tecnológica'],
        imagem: 'ong-foto.png'
      }))
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
