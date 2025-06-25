import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  nome: '',
  areaAtuacao: '',
  cnpj: '',
  endereco: '',
  email: '',
  responsavelLegal: '',
  cpfCnpjResponsavel: '',
  telefoneContato: '',
  senha: '',
  confirmarSenha: '',
  descricao: '',
  tags: []
}

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    atualizarCampo: (state, action) => {
      const { campo, valor } = action.payload
      state[campo] = valor
    },
    setUsuario: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetarFormulario: () => initialState,
  },
})

export const { atualizarCampo, setUsuario, resetarFormulario } = usuarioSlice.actions
export default usuarioSlice.reducer
