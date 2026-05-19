import Paragrafh from '../../components/Paragraph';
import Avatar from '../../components/Avatar';
import Title from '../../components/Title';

import { Description, BotaoTema, SidebarContainer, SocialLinks } from './styles';

type Props = {
  tradeTheme: () => void;
};

const Sidebar = ({ tradeTheme }: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Willians Martins</Title>
      <Paragrafh type="secundario" fontSize={16}>
        Willsmt
      </Paragrafh>
      <Description type="principal" fontSize={12}>
        FullStack Python
      </Description>

      {/* Redes sociais com ícones */}
      <SocialLinks>
        <a href="https://github.com/willsmt" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/willians-martins-329350329/recent-activity/all/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </SocialLinks>

      <BotaoTema onClick={tradeTheme}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
