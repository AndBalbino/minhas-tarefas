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
          <FiltroCard legenda="pendente" contador={1} />
          <FiltroCard legenda="concluidas" contador={3} />
          <FiltroCard legenda="urgentes" contador={5} />
          <FiltroCard legenda="importantes" contador={3} />
          <FiltroCard legenda="normal" contador={1} />
          <FiltroCard legenda="todas" contador={13} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
