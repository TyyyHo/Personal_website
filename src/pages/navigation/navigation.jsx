import "./navigation.scss";
import "./navigation_mobile.scss";
import React, { useState } from "react";
import logo from "../../../public/img/navigation/owl.png";
import github from "../../../public/img/navigation/github.png";

const Navigation = ({ setPage, theme, setTheme }) => {
  const [mobileNavi, setMobileNavi] = useState(false);

  return (
    <div id="navigation">
      {/* google icon */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div
        id="navigation_btn"
        className="material-icons"
        onClick={() => {
          setMobileNavi(mobileNavi  ? false : true);
        }}
      >
        menu
      </div>

      <div
        id="navigation_container"
        className={mobileNavi ? "show" : "hide"}
      >
        <div className="logo_container">
          <img id="logo" src={logo} alt="Logo" />
        </div>

        <div id="btn_container">
          <span
            id="theme_btn"
            className="material-icons"
            onClick={(e) => {
              if (theme === "dark_theme") {
                setTheme("light_theme");
                e.target.innerText = "mode_night";
                console.log(e.target);
              } else {
                setTheme("dark_theme");
                e.target.innerText = "wb_incandescent";
                console.log(e.target);
              }
            }}
          >
            wb_incandescent
          </span>

          <a href="https://github.com/TyyyHo">
            <img id="github_icon" src={github} alt="github_icon" />
          </a>
        </div>

        <ul id="navigation_option">
          <li
            id="home_btn"
            onClick={() => {
              setPage("home");
              setMobileNavi(false);
            }}
          >
            <span className="material-icons">home</span>
            <p>首頁</p>
          </li>
          <li
            id="aboutMe_btn"
            onClick={() => {
              setPage("aboutMe");
              setMobileNavi(false);
            }}
          >
            <span className="material-icons">account_circle</span>
            <p>關於我</p>
          </li>
          <li
            id="portfolio_btn"
            onClick={() => {
              setPage("portfolio");
              setMobileNavi(false);
            }}
          >
            <span className="material-icons">integration_instructions</span>
            <p>專案作品</p>
          </li>
          <li
            id="contact_btn"
            onClick={() => {
              setPage("contact");
              setMobileNavi(false);
            }}
          >
            <span className="material-icons">perm_phone_msg</span>
            <p>聯絡資訊</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Navigation };
