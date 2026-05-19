import { Title as TitleStyle } from './styles';

export type Props = {
  children: string;
  fontSize?: number;
  type?: 'principal' | 'secundario';
};

const Title = (props: Props) => <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>;

export default Title;
