import styled from 'styled-components';
import { Props } from '.';

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'principal' ? props.theme.corPrincipal : props.theme.corSecundaria};
  line-height: 1.6;
  margin-bottom: 12px;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.corDeFundoBotao};
  }
`;
