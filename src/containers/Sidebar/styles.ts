import { P } from '../../components/Paragraph/styles';
import styled from 'styled-components';

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const BotaoTema = styled.button`
  font-size: 10px;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-weight: bold;
  background-color: #282a35; /* corrigido */
  border: none; /* opcional: remove a borda padrão */
  cursor: pointer; /* deixa com "mãozinha" ao passar o mouse */

  &:hover {
    background-color: #1f2029; /* cor mais escura no hover */
  }
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
