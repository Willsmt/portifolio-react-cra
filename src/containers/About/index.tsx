import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { GithubSecao } from './styles';

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph type="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptatibus pariatur
      architecto quam! Sit consequatur in earum voluptatibus at, laborum dolorum, id vel repudiandae
      nam quidem corporis quae temporibus deserunt!
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
