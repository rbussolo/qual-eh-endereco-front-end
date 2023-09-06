import { styled } from "styled-components";

export const DropContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 0.5rem;

  position: relative;
  height: 12.5rem;
  padding: 1.25rem;

  border-radius: 8px;
  border: 2px dashed #555;
  color: #444;

  cursor: pointer;
  transition: background .2s ease-in-out, border .2s ease-in-out;

  &:hover, &.dragging {
    background: ${props => props.theme['gray-300']};
    border-color: #111;

    > span {
      color: #222;
    }
  }

  > span {
    color: #444;

    font-size: 1.25rem;
    font-weight: bold;

    text-align: center;
    transition: color .2s ease-in-out;
  }

  input[type=file] {
    width: 350px;
    max-width: 100%;
  }

  input[type=file]::file-selector-button {
    margin-right: 1.25rem;
    border: none;
    background: ${props => props.theme['green-500']};
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    transition: background .2s ease-in-out;
  }

  input[type=file]::file-selector-button:hover {
    background: ${props => props.theme['green-700']};
  }
`;