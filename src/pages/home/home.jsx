import "./home.scss";

const Home = () => {
  return (
    <div id="home" className="content_container">
      {/* <h1 className="title">首頁</h1> */}

      <section id="main_content">
        <div id="text_container">
          <div className="title">
            <h2>Hello, 我是何宗諭</h2>
            <h3>是一名前端工程師</h3>
          </div>

          <div className="paragraph">
            <p>
              從傳產轉職到資訊業的<span>前端工程師</span>，樂於探索與學習新事物，善於溝通與團隊合作。
            </p>
          </div>
        </div>

        <div id="img_container">
          <img src="img/home/照片.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export { Home };
