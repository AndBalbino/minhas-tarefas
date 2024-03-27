import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enuns from '../../utils/enuns/Tarefa'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enuns.Prioridade | enuns.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
