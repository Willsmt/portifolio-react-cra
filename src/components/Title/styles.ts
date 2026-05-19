import styled from 'styled-components';
import { Props } from '.';

export const Title = styled.h3<Props>`
  color: ${(props) =>
    props.type === 'secundario' ? props.theme.corSecundaria : props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: 700;
  margin-bottom: 16px;
  transition:
    color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: ${(props) => props.theme.corDeFundoBotao};
  }
`;
