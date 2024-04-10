import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enuns from '../../utils/enuns/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      prioridade: enuns.Prioridade.IMPORTANTE,
      titulo: 'Estudar JS',
      descricao: 'Estudar manipulação do DOM',
      status: enuns.Status.CONCLUIDA
    },
    {
      id: 2,
      prioridade: enuns.Prioridade.NORMAL,
      titulo: 'Estudar React',
      descricao: 'Estudar React com Redux',
      status: enuns.Status.CONCLUIDA
    },
    {
      id: 3,
      prioridade: enuns.Prioridade.IMPORTANTE,
      titulo: 'Estudar TypeScript',
      descricao: 'Terminar o curso sobre TypeScript',
      status: enuns.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions
export default tarefasSlice.reducer
