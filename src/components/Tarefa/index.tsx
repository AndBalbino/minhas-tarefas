import { useState } from 'react'
import * as S from './styles'

import * as enuns from '../../utils/enuns/Tarefa'

type Props = {
  titulo: string
  prioridade: enuns.Prioridade
  status: enuns.Status
  descricao: string
}

const Tarefa = ({ prioridade, descricao, status, titulo }: Props) => {
  const [estaEditando, setEstaEditanto] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEstaEditanto(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditanto(true)}>Editar</S.Botao>
            <S.BotaoCancelar>Remover</S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
