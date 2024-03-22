import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar',
    descricao: 'Ver video aula',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Ler',
    descricao: 'ler o livro',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Treinar',
    descricao: 'Treinar perna',
    prioridade: 'importante',
    status: 'concluída'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcadas como &quot;categoridas&ldquo; e &quot;termo&ldquo;{' '}
    </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
            titulo={t.titulo}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
