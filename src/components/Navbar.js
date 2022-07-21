import { useDarkThemeContext } from "../DarkThemeContext";

export default function Navbar() {
  const [darkmode, toggleDark] = useDarkThemeContext();

  return (
    <nav className={darkmode ? "dark" : "light"}>
      <h1>Hello World</h1>
      <button onClick={toggleDark}>Toggle</button>
    </nav>
  );
}
