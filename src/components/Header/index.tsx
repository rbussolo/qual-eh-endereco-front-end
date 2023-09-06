import { HeaderContainer, HeaderContent, LinkContainer, LinkHome, LinkNav } from "./styles";

interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps){
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LinkHome href="/">
            Qual é o endereço?
          </LinkHome>

          <LinkContainer>
            <LinkNav href="/documentacao">Documentação</LinkNav>
            <LinkNav href="/acessar">Acessar</LinkNav>
          </LinkContainer>
        </HeaderContent>
      </HeaderContainer>

      { children }
    </>
  )
}