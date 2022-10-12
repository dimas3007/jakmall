import Payment from "./pages/Payment";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Payment />
    </ThemeProvider>
  );
}

export default App;
