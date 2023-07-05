import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {

};

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}