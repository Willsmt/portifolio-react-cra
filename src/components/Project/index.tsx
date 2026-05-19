import { useEffect, useState } from 'react';
import Title from '../Title';
import Paragrafh from '../Paragraph';
import { Card, LinkBotao } from './styles';

type Repo = {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
  updated_at: string;
};

const Projects = () => {
  const nomeUsuario = 'Willsmt';
  const [repos, setRepos] = useState<Repo[]>([]);
  const [estaCarregando, setEstaCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (!nomeUsuario) return;

    // Variável de controle para evitar atualizações de renderizações duplicadas do Strict Mode
    let ativo = true;

    setEstaCarregando(true);
    setErro(null);

    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => {
        if (res.status === 404) throw new Error('Usuário não encontrado no GitHub');
        if (res.status === 403) throw new Error('Limite de requisições do GitHub atingido');
        if (!res.ok) throw new Error(`Erro inesperado: ${res.status}`);
        return res.json();
      })
      .then((resJson) => {
        // Só atualiza o estado se o componente ainda estiver ativo nesta execução
        if (ativo) {
          if (Array.isArray(resJson)) {
            const ordenados = resJson.sort(
              (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            );
            setRepos(ordenados);
          } else {
            setRepos([]);
            setErro('Nenhum repositório encontrado.');
          }
          setEstaCarregando(false);
        }
      })
      .catch((err) => {
        if (ativo) {
          setErro(err.message);
          setRepos([]);
          setEstaCarregando(false);
        }
      });

    // Função de limpeza (cleanup) do useEffect
    return () => {
      ativo = false;
    };
  }, [nomeUsuario]);

  if (estaCarregando) return <h1>Carregando...</h1>;

  // Se der erro, além da mensagem, mantemos a estrutura básica visível para você saber o que houve
  if (erro) {
    return (
      <section>
        <Title fontSize={16}>Projetos</Title>
        <p style={{ color: 'red', marginTop: '16px' }}>{erro}</p>
      </section>
    );
  }

  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      {repos.length > 0 ? (
        repos.slice(0, 5).map(({ id, name, language, html_url, updated_at }) => (
          <Card key={id}>
            <Title>{name}</Title>
            <Paragrafh type="secundario">Linguagem: {language || 'Não especificada'}</Paragrafh>
            <Paragrafh type="secundario">
              Última atualização: {new Date(updated_at).toLocaleDateString('pt-BR')}
            </Paragrafh>
            <LinkBotao href={html_url} target="_blank" rel="noreferrer">
              🔗 Visualizar no GitHub
            </LinkBotao>
          </Card>
        ))
      ) : (
        <p>Nenhum repositório encontrado.</p>
      )}
    </section>
  );
};

export default Projects;
