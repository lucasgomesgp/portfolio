import { Home } from "./pages/Home";
import { ThemeContextProvider } from "./hooks/ThemeContext";
import "./App.scss";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </>
  );
}

export default App;
