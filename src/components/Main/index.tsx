import { Heading } from './styles';

export interface IMainProps {
  title?: string;
}

export function Main({ title = 'Main' }: IMainProps) {
  return <Heading>{title}</Heading>;
}
