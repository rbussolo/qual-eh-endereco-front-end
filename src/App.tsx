import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Import } from "./pages/Import";
import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header>
        <Import />
      </Header>

      <GlobalStyle />
    </ThemeProvider>
  )
}

