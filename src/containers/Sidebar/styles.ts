import { P } from '../../components/Paragraph/styles';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  padding: 16px;
  border-right: 1px solid ${(props) => props.theme.corDaBorda};

  /* Garante que todo o conteúdo da Sidebar siga um alinhamento vertical perfeito */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente todos os filhos */
  text-align: center; /* Centraliza todos os textos internos */

  /* Estilização para a imagem de Avatar ficar sempre centralizada */
  img {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 40px;
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.corDaBorda};
    padding-bottom: 24px;
  }
`;

export const Description = styled(P)`
  margin-top: 16px; /* Reduzido um pouco para aproximar do nick do Github */
  margin-bottom: 24px;
  color: ${(props) => props.theme.corSecundaria};
  font-size: 14px;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px; /* Espaço levemente maior antes do botão */
  justify-content: center; /* Garante centralização tanto no desktop quanto mobile */

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a img,
  a svg {
    width: 28px; /* Aumentado sutilmente para melhor clique/visualização */
    height: 28px;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  a img:hover,
  a svg:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

export const BotaoTema = styled.button`
  font-size: 12px;
  border-radius: 12px;
  padding: 10px 20px; /* Ajuste sutil no padding para o botão respirar melhor */
  color: ${(props) => props.theme.corDeFundo};
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  display: inline-block;
  margin: 0 auto; /* Força o alinhamento central em blocos puros */

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoHover};
    transform: scale(1.05);
  }
`;
