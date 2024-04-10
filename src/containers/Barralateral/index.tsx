import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import FiltroCard from '../../components/FiltroCard'
import { alterarTermo } from '../../store/reducers/Filtro'

import * as S from './styles'
import * as enuns from '../../utils/enuns/Tarefa'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enuns.Status.PENDENTE}
            criterio="status"
            legenda="pendente"
          />
          <FiltroCard
            valor={enuns.Status.CONCLUIDA}
            criterio="status"
            legenda="concluidas"
          />
          <FiltroCard
            valor={enuns.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="urgentes"
          />
          <FiltroCard
            valor={enuns.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="importantes"
          />
          <FiltroCard
            valor={enuns.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="normal"
          />
          <FiltroCard criterio="todas" legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
