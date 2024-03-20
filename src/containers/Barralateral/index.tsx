import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
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

export default BarraLateral
