import { useDispatch } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/Filtro'
import * as enuns from '../../utils/enuns/Tarefa'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor: enuns.Prioridade | enuns.Status
}

const FiltroCard = ({ ativo, contador, legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  return (
    <S.Card ativo={ativo}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
