import styled from 'styled-components';
import { Props } from '.';
export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.type === 'principal' ? '#282a35' : '#282a35')};
  line-height: 22px;
`;
