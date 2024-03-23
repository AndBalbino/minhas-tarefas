import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enuns from '../../utils/enuns/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JS',
      enuns.Prioridade.IMPORTANTE,
      enuns.Status.CONCLUIDA,
      '',
      1
    ),
    new Tarefa(
      'Estudar React',
      enuns.Prioridade.NORMAL,
      enuns.Status.PENDENTE,
      'Rever Redux',
      2
    ),
    new Tarefa(
      'Estudar Python',
      enuns.Prioridade.URGENTE,
      enuns.Status.PENDENTE,
      'Estudar estrutura de dados',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
