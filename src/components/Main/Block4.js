import React from "react";
import img1 from "../../img/bed1.png";
import img2 from "../../img/bed2.png";
import img3 from "../../img/bed3.png";

export default function Block4() {
  return (
    <div className="block4">
      <h2>Beds</h2>
      <div className="box">
        <div className="box2">
          <img src={img1} alt="Bed1" className="lil_img"></img>
          <p className="block_text">
            Our beds are designed to provide you with a comfortable and restful
            sleep. Each bed is crafted using the finest materials to ensure
            reliability and longevity. With a wide selection of models and
            designs, you can find the perfect bed to fit your bedroom and create
            an atmosphere of tranquility and comfort.
          </p>
          <button className="see_more">Search</button>
        </div>

        <img src={img2} alt="Bed2" className="big_img" />
        <img src={img3} alt="Bed3" className="big_img" />
      </div>
    </div>
  );
}
