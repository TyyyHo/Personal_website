import "./display_module.scss";
import { custom_element } from "./custom_element";
import { useEffect } from "react";

const Display_module = ({ project }) => {
  useEffect(() => {
    custom_element();
  }, []);

  return (
    <div id="display_module">
      <custom-p class="display_title" content={project.title}></custom-p>
      <custom-p class="description" content={project.description}></custom-p>

      <div className="feature">
        <p>網站功能</p>
        <custom-p content={project.feature}></custom-p>
      </div>

      <div className="img_container">
        <img src={project.img_path_1} alt="" />
        <img src={project.img_path_2} alt="" />
        <img src={project.img_path_3} alt="" />
      </div>

      <div className="anchor_btn">
        <a href={project.url}>
          <div className="bg"></div>
          <div className="front">網站連結</div>
        </a>
      </div>
    </div>
  );
};

export { Display_module };
