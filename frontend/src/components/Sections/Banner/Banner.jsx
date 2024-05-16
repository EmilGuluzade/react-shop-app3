import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="SectionDivan">
      <div className="SectionDivan__box">
        <div className="SectionDivan__left">
          <h1>Wood & <br /> Cloth Sofa</h1>
          <p>
            Incididunt ut labore et dolore magna aliqua quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra
          </p>
          <button>BUY NOW</button>
        </div>
        <div className="SectionDivan__right">
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
