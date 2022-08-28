import "./portfolio.scss";
import { Display_module } from "../../components/project_display_model/display_module";

const Portfolio = () => {
  let park2 = {
    title: "Park2",
    description:
      "以台中勤美「PARK2草悟廣場」為主題所設計的導覽型網站。<br/>網站風格參考Park2的設計理念，融合戶外生活和城市慢活，以「公園」、「店鋪」、「藝文生活」為三大主軸。",
    feature: "React、互動式地圖、SVG控制",
    img_path_1: "img/portfolio/park2/park2_home.png",
    img_path_2: "img/portfolio/park2/park2_map.png",
    img_path_3: "img/portfolio/park2/park2_store.png",
    url: "https://tyyyho.github.io/Park2/",
  };

  let personalWebsite = {
    title: "個人網站",
    description: "以React架構來規劃一頁式個人網站。",
    feature: "一頁式網站、React、一鍵切換網站配色、網站導覽",
    img_path_1: "img/portfolio/personal_website/homePage.png",
    img_path_2: "img/portfolio/personal_website/about.png",
    img_path_3: "img/portfolio/personal_website/portfolio.png",
    url: "https://tyyyho.github.io/Park2/",
  };

  return (
    <div id="portfolio" className="content_container">
      <h1 className="title">作品</h1>
      <Display_module project={park2} />
      <Display_module project={personalWebsite} />

      <div className="scrollDown material-icons">arrow_downward</div>
    </div>
  );
};

export { Portfolio };
