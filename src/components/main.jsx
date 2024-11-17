import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import picOne from "../Assets/picOne.jpg";
import picTwo from "../Assets/picTwo.jpg";
import picThree from "../Assets/picThree.jpg";
import picFour from "../Assets/picFour.jpg";
import picFive from "../Assets/picFiv.jpg";
import picSix from "../Assets/picSix.jpg";
import "../Style/index.css";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 shopMain ">
          <OwlCarousel
            className="owl-theme owl-carousel"
            loop
            dots={false}
            autoplay
            autoplayTimeout={3000}
            items={1}
            center={true}
            autoHeight={true}
          >
            <div>
              <img className="" alt="one" src={picOne} />
            </div>
            <div>
              <img className="" alt="second" src={picTwo} />
            </div>
            <div>
              <img className="" alt="three" src={picThree} />
            </div>
            <div>
              <img className="" alt="fourth" src={picFour} />
            </div>
            <div>
              <img className="" alt="five" src={picFive} />
            </div>
            <div>
              <img className="" alt="six" src={picSix} />
            </div>
          </OwlCarousel>      
          <div className="card-img-overlay d-flex align-items-end shopTxt">
            <div className="container">
              <div className="">
                <h5 className="card-title fs-1 text fw-lighter">
                  New Season Arrivals
                </h5>
                <p className="card-text fs-5 d-none d-sm-block ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
