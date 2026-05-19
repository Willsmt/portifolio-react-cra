import Paragrafh from '../../components/Paragraph';
import Avatar from '../../components/Avatar';
import Title from '../../components/Title';

import { Description, BotaoTema, SidebarContainer } from './styles';

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>willians Martins</Title>
      <Paragrafh type="secundario" fontSize={16}>
        Willsmt
      </Paragrafh>
      <Description type="principal" fontSize={12}>
        FullStack Python
      </Description>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
