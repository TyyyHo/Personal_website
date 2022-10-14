import { Navigation } from "./pages/navigation/navigation.jsx";
import { AboutMe } from "./pages/aboutMe/aboutMe.jsx";
import { Home } from "./pages/home/home.jsx";
import { Portfolio } from "./pages/portfolio/portfolio.jsx";
import { Contact } from "./pages/contact/contact.jsx";
import "./App.scss";
import "./theme.scss";
import "./animation.css";

import React from 'react';
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState("dark_theme");


  return (
    <div id="app" className={ theme === "dark_theme" ? "dark_theme":"light_theme"}>
      <Navigation setPage={setPage} theme={theme} setTheme={setTheme} />
      {
        {
          home: <Home />,
          aboutMe: <AboutMe />,
          portfolio: <Portfolio />,
          contact: <Contact />,
        }[page]
      }
    </div>
  );
}

export default App;
