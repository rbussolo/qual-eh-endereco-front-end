import styled from 'styled-components';

export const ImportContainer = styled.div`
  max-width: 70rem;
  padding: 2rem;

  margin-left: auto;
  margin-right: auto;

  min-height: calc(100% - 5rem);
`;

export const ImportTable = styled.table`
  width: 100%;

  margin-top: 1rem;
  margin-bottom: 1rem;

  border-collapse: collapse;

  & tbody td, & thead th {
    border: 1px solid ${props => props.theme['gray-600']};
    padding: 0.5rem;
  }

  & tr:nth-child(odd){
    background-color: ${props => props.theme['gray-200']};
  }

  & tr:nth-child(even){
    background-color: ${props => props.theme['gray-300']};
  }

  & tr:hover {
    background-color: ${props => props.theme['gray-500']};
  }

  & th {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: left;
    background-color: ${props => props.theme['green-500']};
    color: white;
  }
`

export const ProcessingContainer = styled.div`
  padding-top: 1rem;

  h1 {
    text-align: center;
  }

  > div {
    width: 100%;

    display: flex;
    justify-content: center;

    padding-top: 1rem;

    button {
      border: none;
      border-radius: 8px;

      width: 250px;

      background: ${props => props.theme['green-500']};
      
      padding: 0.5rem 1.25rem;
      
      color: #fff;
      
      cursor: pointer;
      transition: background .2s ease-in-out;

      &:hover {
        background: ${props => props.theme['green-700']};
      }
    }
  }
  
`;
