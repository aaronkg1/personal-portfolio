import "./styles/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Spinner from "./components/SpinningMenu";
import { useSelector } from "react-redux";
function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <HashRouter hashType="noslash">
      <div
        className={theme === "dark" ? "page-container" : "page-container light"}
      >
        <Spinner />
        <main className="main-content">
          <Home />
          <About />
          <Projects />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
