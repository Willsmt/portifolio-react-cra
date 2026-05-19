import { P } from '../../components/Paragraph/styles';
import styled from 'styled-components';

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.corSecundaria};
  font-size: 14px;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

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

  /* Centralizar no mobile */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const BotaoTema = styled.button`
  font-size: 12px;
  border-radius: 12px;
  padding: 8px 16px;
  color: ${(props) => props.theme.corDeFundo};
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoHover};
    transform: scale(1.05);
  }
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  padding: 16px;
  border-right: 1px solid ${(props) => props.theme.corDaBorda};

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.corDaBorda};
    justify-content: center;
  }
`;
