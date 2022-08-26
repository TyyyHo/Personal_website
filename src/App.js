import { Navigation } from "./pages/navigation/navigation";
import { AboutMe } from "./pages/aboutMe/aboutMe";
import { Home } from "./pages/home/home";
import { Portfolio } from "./pages/portfolio/portfolio";
import { Contact } from "./pages/contact/contact";
import { define_element } from "./components/project_display_model/define_element";
import "./App.scss";
import "./theme.scss";
import "./animation.css";


import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState("dark_theme");

  useEffect(() => {
    define_element();
  }, []);

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
