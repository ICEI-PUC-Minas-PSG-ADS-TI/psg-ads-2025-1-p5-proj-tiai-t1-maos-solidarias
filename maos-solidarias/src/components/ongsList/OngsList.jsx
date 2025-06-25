'use client'

import React from 'react'
import OngCard from '../../components/ongCard/OngCard' 

const ongs = [
  {
    id: 1,
    nome: 'Crianças na tecnologia',
    endereco: 'Alameda Braúna 94, Condomínio Rosa dos Ventos',
    telefoneContato: '(31)99416-7235',
    descricao:
      'Na Ong Crianças na tecnologia, acreditamos que toda criança merece a chance de explorar o mundo da tecnologia. Levamos conhecimento e oportunidades a comunidades carentes, despertando nas crianças a curiosidade, a criatividade e o poder de transformar seus próprios futuros através da educação digital.',
    tags: ['Tecnologia', 'Crianças', 'Educação tecnológica'],
    verificada: true,
    imagem: '/ong-foto.png',
  },
  {
    id: 2,
    nome: 'Alimento para Todos',
    endereco: 'Rua das Mangueiras, 1200 - São Paulo, SP',
    telefoneContato: '(11)93451-1320',
    descricao:
      'Distribuímos alimentos para famílias em situação de vulnerabilidade em regiões periféricas. Nossa missão é garantir que ninguém durma com fome.',
    tags: ['Alimentação', 'Comunidade', 'Doações'],
    verificada: true,
    imagem: '/impacto2.png',
  },
  {
    id: 3,
    nome: 'Saúde em Movimento',
    endereco: 'Av. Central, 400 - Curitiba, PR',
    telefoneContato: '(41)91234-5678',
    descricao:
      'Levamos atendimento médico voluntário a comunidades remotas com pouca ou nenhuma infraestrutura de saúde pública.',
    tags: ['Saúde', 'Voluntariado', 'Atendimento'],
    verificada: true,
    imagem: '/donate1.png',
  },
]

const OngsList = () => {
  return (
    <div style={{ padding: '2rem', margin: '0 auto' }}>
      {ongs.map((ong) => (
        <OngCard key={ong.id} usuario={ong} />
      ))}
    </div>
  )
}

export default OngsList
