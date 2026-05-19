import { useEffect, useState } from 'react';
import Title from '../../components/Title';
import { Card, LinkBotao } from '../../components/Project/style';
import { List } from './styles';

type Repo = {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
};

const Projects = ({ nomeUsuario = 'seu-usuario-github' }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => {
        if (!res.ok) throw new Error('Usuário não encontrado');
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setErro(err.message);
        setLoading(false);
      });
  }, [nomeUsuario]);

  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      {loading ? (
        <p>Carregando...</p>
      ) : erro ? (
        <p style={{ color: 'red' }}>{erro}</p>
      ) : (
        <List>
          {repos.slice(0, 5).map(({ id, name, language, html_url }) => (
            <li key={id}>
              <Card>
                <Title>{name}</Title>
                <p>Linguagem: {language || 'Não especificada'}</p>
                <LinkBotao href={html_url} target="_blank" rel="noreferrer">
                  🔗 Visualizar no GitHub
                </LinkBotao>
              </Card>
            </li>
          ))}
        </List>
      )}
    </section>
  );
};

export default Projects;
