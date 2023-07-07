import { styled } from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    background: #E7E9EE;
    border: 1px solid #D7D7D7;

    font-size: 1rem;
    font-weight: 400;

      &::placeholder {
        color: var(--text-body);
      }

      & + input {
        margin-top: 1rem;
      }

  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background: var(--green);
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-top: 24px;

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s ease-in;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContainerButton = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface ModalProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<ModalProps>`
  height: 4rem;
  border-radius: 5px;
  border: 1px solid #d7d7d7;

  background: ${(props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'trasparent'
  };
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  transition: border-color 0.2s ease-in;

  &:hover{
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
