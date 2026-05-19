import { ReactNode } from 'react';
import { P } from './styles';

export type Props = {
  children: ReactNode;
  type?: 'principal' | 'secundario';
  fontSize?: number;
};

const Paragrafh = ({ children, type = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
);

export default Paragrafh;
