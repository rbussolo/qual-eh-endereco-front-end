import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 5rem;

  color: ${props => props.theme['gray-200']};
  background-color: ${props => props.theme['green-700']};

  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.div`
  max-width: 70rem;
  width: 100%;

  padding-left: 2rem;
  padding-right: 2rem;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;
`;

export const LinkHome = styled.a`
  color: ${props => props.theme['gray-200']};
  text-decoration: none;
  
  font-size: 2rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LinkNav = styled.a`
  color: ${props => props.theme['gray-200']};
  text-decoration: none;
  
  padding: 0.5rem;
  font-size: 1.25rem;

  border-bottom: 2px solid ${props => props.theme['gray-200']};

  transition: background-color 0.2s, color 0.5s;

  &:hover {
    color: ${props => props.theme['green-700']};
    background-color: ${props => props.theme['gray-200']};
  }
`;