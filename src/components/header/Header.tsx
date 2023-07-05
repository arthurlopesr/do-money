import logoImg from '../../assets/logo-do.svg';
import { Container, Content } from './styles';

interface HeaderProps {

};

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Doppler money logo" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}