import Paragrafh from '../Paragraph';
import Title from '../Title';
import { Card, LinkBotao } from './style';

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragrafh type="secundario"> Lista de tarefas feita com VueJs</Paragrafh>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
);

export default Project;
