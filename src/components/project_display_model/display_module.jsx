import "./display_module.scss";
import React from 'react';

const Display_module = ({ project }) => {
  
  return (

    <div id="display_module">
      <div className="display_title">{project.title}</div>
      <div className="description">{project.description}</div>

      <div className="feature">
        <p>網站功能</p>
        <div>{project.feature}</div>
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

        <a href={project.github}>
          <div className="bg"></div>
          <div className="front">Github</div>
        </a>
      </div>
    </div>
  );
};

export { Display_module };
