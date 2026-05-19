import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { GithubSecao } from './styles';

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="principal">
      Se eu tivesse que resumir meu perfil em uma palavra, seria disciplina. Com um background
      robusto em atuação social, desenvolvi uma escuta ativa refinada e uma forte capacidade de
      resolução de conflitos e gestão de processos. Hoje, canalizo essa energia e resiliência na
      Engenharia de Software. Atualmente, construo aplicações utilizando JavaScript, Node.js e
      Python, com forte domínio em automação de tarefas e otimização de front-end. Gosto de projetos
      desafiadores que exigem pensamento estruturado, atenção aos detalhes (da arquitetura de
      diretórios à semântica do código) e entrega consistente. Estou sempre em busca de evoluir,
      dominar novas tecnologias e colaborar com times que queiram impactar o mercado com tecnologia
      de ponta.
    </Paragraph>
    <GithubSecao>
      <img
        src="https://readme-stats-willismt.vercel.app/api?username=Willsmt&show_icons=true&theme=dracula&count_private=true"
        alt="Estatísticas do GitHub"
      />
      <img
        src="https://readme-stats-willismt.vercel.app/api/top-langs/?username=Willsmt&layout=compact&langs_count=7&theme=dracula"
        alt="Linguagens mais usadas no GitHub"
      />
    </GithubSecao>
  </section>
);

export default About;
