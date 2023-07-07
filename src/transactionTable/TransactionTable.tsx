import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../services/api";


interface TransactionTableProps {
  id: number;
  title: string;
  amouth: number;
  type: string;
  category: string;
  createdAt: string;
}
export function TransactionTable() {
  const [transactions, setTransactions] = useState<TransactionTableProps[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transactions => (
            <tr key={transactions.id}>

              <td>{transactions.title}</td>

              <td className={transactions.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transactions.amouth)}
              </td>
              <td>{transactions.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transactions.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
