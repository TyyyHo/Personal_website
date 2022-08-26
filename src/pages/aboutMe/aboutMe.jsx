import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="content_container">
      <h1 className="title">關於我</h1>

      <h3>
        畢業於逢甲大學企業管理系，樂於了解新事物及面對挑戰，因此培養出良好的抗壓性；好相處及高EQ是朋友和同事們常給我的評價。
      </h3>
      <h3>
        在上一份工作中，我負責產品開發、品牌行銷及銷售業務，經歷過多元的工作項目，我明白了自己其實更期望待在RD的職務上，於是參加了資策會的前端工程師課程，並在課程中學習到了網頁實作技術與團隊開發，結合以往工作中的協調、溝通的經驗，目標成為一位全方位的工程師。
      </h3>

      <section id="form">
        <section id="skill">
          <ul className="skill_container about_bg">
            <li className="skills">
              <span className="material-icons">label</span>
              HTML
            </li>
            <li className="skills">
              <span className="material-icons">label</span>
              CSS, SASS
            </li>
            <li className="skills">
              <span className="material-icons">label</span>
              JavaScript
            </li>
            <li className="skills">
              <span className="material-icons">label</span>jQuery
            </li>
            <li className="skills">
              <span className="material-icons">label</span>RESTful API
            </li>
          </ul>

          <ul className="skill_container about_bg">
            <li className="skills">
              <span className="material-icons">label</span>React
            </li>
            <li className="skills">
              <span className="material-icons">label</span>Redux
            </li>
            <li className="skills">
              <span className="material-icons">label</span>Material UI
            </li>
          </ul>
        </section>

        <section id="info">
          <p id="phone" className="about_bg">
            連絡電話: <b>0962-067202</b>
          </p>
          <p id="mail" className="about_bg">
            電子信箱: <b>ty.ho1126@gmail.com</b>
          </p>
          {/* <p id="exp" className="about_bg">
            相關經驗: <b>six months</b>
          </p> */}
          <p id="project" className="about_bg">
            專案經驗: <b>2</b>
          </p>
          <p id="birth" className="about_bg">
            出生日期: <b>1992/11/26</b>
          </p>
        </section>
      </section>
    </div>
  );
};

export { AboutMe };
