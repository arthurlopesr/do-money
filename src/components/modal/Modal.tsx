import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, ContainerButton, RadioBox } from './styles';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {

  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='ract-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Fechar nova transação" />
      </button>

      <Container>

        <h2>Cadastrar transação</h2>

        <input
          placeholder='Titulo'
        />

        <input
          type='number'
          placeholder='Valor'
        />

        <ContainerButton>
          <RadioBox
            type='button'
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

        </ContainerButton>

        <input
          placeholder='Categoria'
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>

    </Modal>
  )
}
