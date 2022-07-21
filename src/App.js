import { DarkThemeContextProvider } from "./DarkThemeContext";
import Navbar from "./components/Navbar";
function App() {
  return (
    <DarkThemeContextProvider>
      <div className="app">
        <Navbar />
      </div>
    </DarkThemeContextProvider>
  );
}

export default App;
