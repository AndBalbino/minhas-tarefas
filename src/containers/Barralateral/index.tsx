import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { alterarTermo } from '../../store/reducers/Filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard criterio="status" legenda="pendente" contador={1} />
          <FiltroCard criterio="status" legenda="concluidas" contador={3} />
          <FiltroCard criterio="prioridade" legenda="urgentes" contador={5} />
          <FiltroCard
            criterio="prioridade"
            legenda="importantes"
            contador={3}
          />
          <FiltroCard criterio="prioridade" legenda="normal" contador={1} />
          <FiltroCard criterio="todas" legenda="todas" contador={13} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
