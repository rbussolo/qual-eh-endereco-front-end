import { styled } from "styled-components"
import { Spinner } from "../../../components/Spinner";

const fileStates = {
  waiting: 'Aguardando',
  importing: 'Importando',
  imported: 'Importado',
};

interface FileStateProps {
  state: "waiting" | "importing" | "imported";
}

const FileStateContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  padding: 0.5rem 0.25rem;
  width: 10rem;

  color: #FFF;
  background-color: ${props => props.theme['gray-450']};

  &.importing {
    background-color: ${props => props.theme['orange-500']};
  }

  &.imported {
    background-color: ${props => props.theme['green-500']};
  }
`

export function FileState({ state }: FileStateProps) {
  return (
    <FileStateContainer className={state}>
      {fileStates[state]}

      { state === "importing" && (
        <Spinner size={1} />
      ) }
    </FileStateContainer>
  )
}