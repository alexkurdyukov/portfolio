import React, { useState } from "react";
import {Socials} from './/components/Socials/index.jsx'

import { Header } from "./components/Header/index";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { Projects } from "../src/pages/Projects/index.jsx";
import { Intro } from "./pages/Intro";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import "./assets/scss/index.scss";


const App = () => {
  const [page, setPage] = useState("intro");
  const windowWidth = useWindowWidth();
  return (
    <div className="layout">
      <Header page={page} setPage={setPage} />

      {page === "intro" && <Intro page={page} setPage={setPage}/>}

      {page === "about" && <About />}

      {page === "projects" && <Projects />}

      {page === "contacts" && <Contacts />}

      {windowWidth && windowWidth > 1650 && <Socials/>}
    </div>
  );
};

export default App;
