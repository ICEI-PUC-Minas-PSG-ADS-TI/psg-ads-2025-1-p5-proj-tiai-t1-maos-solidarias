import React from 'react'
import styles from './page.module.css'
import CenterImageSection from '../../../components/centerImageSection/CenterImageSection';
import RegisterForm from '../../../components/registerForm/RegisterForm';
import StepsScetion from '../../../components/stepsSection/StepsSection';
import { stepsData } from './types'

const Register = () => {
  return (
    <div className={styles.container}>
      <CenterImageSection 
        align={'center'} 
        description={'Junte se a nós para criar um impacto duradouro - um projeto de cada vez.'} 
        title={'Cadastre sua Ong'} 
        image={'register.png'} 
        showButton={false}
        mh='65vh'
        />
        <RegisterForm />
        <StepsScetion steps={stepsData} title={'Benefícios da Doação'}/>
    </div>
  )
}

export default Register;