import { styled } from "styled-components";

export const CheckBoxContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0.25rem;
  width: 10rem;

  color: #FFF;
  background-color: ${props => props.theme['green-500']};

  cursor: pointer;
  transition: background-color 0.2s;

  input {
    display: none;
  }

  &:hover {
    background-color: ${props => props.theme['green-700']};
  }

  &.is-not-checked {
    background-color: ${props => props.theme['red-500']};

    &:hover {
      background-color: ${props => props.theme['red-700']};
    }
  }
`