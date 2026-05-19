import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.corDeFundoClaro || '#fafafa'};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 6px;
  display: inline-block;
  margin-top: 24px;
  font-weight: bold;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoHover || '#335a91'};
    transform: scale(1.05);
  }
`;
