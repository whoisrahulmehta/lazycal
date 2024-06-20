import { useState } from "react";
// import Landingpage from './components/Landingpage';
import Calculator from "./components/Calculator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(`${theme === "dark" ? "light" : "dark"}`);
    console.log("changing the theme to ");
  };
  return (
    <div className={`App ${theme}`} >
      <header className={theme}>
        <div className="brand">
          <span>Lazy Calculator</span>
          <p className="logo">
            <FontAwesomeIcon icon={faCalculator} />
          </p>
        </div>
        <p className="btns" onClick={toggleTheme}>
          <span>
            {theme === "dark" ? (
              <span className="icon">
                {" "}
                <FontAwesomeIcon icon={faToggleOn} />
              </span>
            ) : (
              <span className="icon">
                {" "}
                <FontAwesomeIcon icon={faToggleOff} />
              </span>
            )}
          </span>
        </p>
      </header>
      <Calculator theme={theme} />
      <footer className={theme}>
        <p className="cal orange orderL">
          {" "}
          Powered by<span className="gold">Rahul Mehta</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
