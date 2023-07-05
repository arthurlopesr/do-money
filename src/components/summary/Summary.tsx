import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from '../../assets/total.svg'

interface SummarryProps {

}
export function Summarry(props: SummarryProps) {
  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>R$12.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>R$2.000,00 </strong>
      </div>

      <div className="highlightGreen">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$10.000,00</strong>
      </div>

    </Container>
  )
}