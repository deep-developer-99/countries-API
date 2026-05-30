import { Outlet } from "react-router";
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";
const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")),
  );

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
