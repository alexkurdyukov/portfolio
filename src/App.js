import React, { useEffect, useState } from "react";
import { Socials } from ".//components/Socials/index.jsx";
import { Header } from "./components/Header/index";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { Projects } from "../src/pages/Projects/index.jsx";
import { Intro } from "./pages/Intro";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { CSSTransition } from "react-transition-group";
import "./assets/scss/index.scss";
import HeaderLogo from "./assets/images/header-logo.svg";
import { set } from "react-hook-form";

const App = () => {
  const [page, setPage] = useState("intro");
  const windowWidth = useWindowWidth();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="layout">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text glitch-loader">Loading</span>
          <div className="loader__circle">
            <div className="circle__inner">
              
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header page={page} setPage={setPage} setIsLoading={setIsLoading} />
          {page === "intro" && <Intro page={page} setPage={setPage} />}
          {page === "about" && <About />}
          {page === "projects" && <Projects />}
          {page === "contacts" && <Contacts />}
          {windowWidth && windowWidth > 1650 && <Socials />}
        </>
      )}
    </div>
  );
};

export default App;
