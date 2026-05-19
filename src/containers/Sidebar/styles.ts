import { P } from '../../components/Paragraph/styles';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  border-right: 1px solid ${(props) => props.theme.corDaBorda};

  /* Faz com que os elementos internos se alinhem à esquerda sem passar da linha */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  /* Impede o botão e títulos de quebrarem em duas linhas */
  h1,
  h2,
  h3,
  button {
    white-space: nowrap;
  }
`;

export const Description = styled(P)`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.corSecundaria};
  font-size: 14px;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  justify-content: flex-start; /* Alinhado à esquerda no desktop */

  a img {
    width: 24px;
    height: 24px;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  a img:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    justify-content: center; /* Centraliza os ícones no mobile */
  }
`;

export const BotaoTema = styled.button`
  font-size: 12px;
  border-radius: 12px;
  padding: 10px 20px; /* Aumentado levemente para o texto respirar dentro dele */
  color: ${(props) => props.theme.corDeFundo};
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  /* O PULO DO GATO: Impede que o texto "Trocar Tema" quebre em duas linhas */
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoHover};
    transform: scale(1.05);
  }
`;
