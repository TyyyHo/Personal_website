import "./navigation.scss";

const Navigation = ({ setPage, theme, setTheme }) => {
  return (
    <div id="navigation">
      {/* google icon */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div className="logo_container">
        <img id="logo" src="img/navigation/owl.png" alt="Logo" />
      </div>

      <div id="theme_btn_container">
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
      </div>

      <ul>
        <li id="home_btn" onClick={() => setPage("home")}>
          <span className="material-icons">home</span>
          <p>首頁</p>
        </li>
        <li id="aboutMe_btn" onClick={() => setPage("aboutMe")}>
          <span className="material-icons">account_circle</span>
          <p>關於我</p>
        </li>
        <li id="portfolio_btn" onClick={() => setPage("portfolio")}>
          <span className="material-icons">integration_instructions</span>
          <p>專案作品</p>
        </li>
        <li id="contact_btn" onClick={() => setPage("contact")}>
          <span className="material-icons">perm_phone_msg</span>
          <p>聯絡資訊</p>
        </li>
      </ul>
    </div>
  );
};

export { Navigation };
