import React, { useEffect, useState } from "react";
import "./display_module.scss";
import "./display_module_mobile.scss";
// 輪播
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Display_module = ({ project }) => {
  const [carouselSwitch, setCarousel] = useState("off");
  // 偵測是否為行動裝置
  function isMobileDevice() {
    var mobileDevices = [
      "Android",
      "webOS",
      "iPhone",
      "iPad",
      "iPod",
      "BlackBerry",
      "Windows Phone",
    ];
    var isMobileDevice = false;
    for (var i = 0; i < mobileDevices.length; i++) {
      if (navigator.userAgent.match(mobileDevices[i])) {
        isMobileDevice = true;
      }
    }
    return isMobileDevice;
  }

  useEffect(() => {
    if (isMobileDevice() == true) {
      setCarousel("on");
    }
  }, [carouselSwitch]);

  return (
    <div id="display_module">
      <div className="display_title">{project.title}</div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: `${project.description}` }}
      ></div>

      <div className="feature">
        <p>網站功能</p>
        <div>{project.feature}</div>
      </div>
      
      {
        {
          on: (
            <Carousel swipeScrollTolerance={80} showThumbs={false} emulateTouch={true} infiniteLoop={true} showStatus={false}>
              <div className="img_container">
                <img src={project.img_path_1} alt="" />
              </div>
              <div className="img_container">
                <img src={project.img_path_3} alt="" />
              </div>
              <div className="img_container">
                <img src={project.img_path_2} alt="" />
              </div>
            </Carousel>
          ),
          off: (
            <div className="img_container">
              <div>
                <img src={project.img_path_1} alt="" />
              </div>
              <div>
                <img src={project.img_path_3} alt="" />
              </div>
              <div>
                <img src={project.img_path_2} alt="" />
              </div>
            </div>
          ),
        }[carouselSwitch]
      }

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
