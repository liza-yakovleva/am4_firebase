import React from "react";
import "./slider.css"
import '../../common/style/base.css'
import slider_inf_img_m1 from '../img/slider-img1.png'
import slider_inf_img_m2 from '../img/slider-img2.png'
import slider_inf_img_m3 from '../img/slider-img3.png'
import slider_inf_img_m4 from '../img/slider-img4.png'
import slider_inf_img1 from '../img/slider-inf-img1.png'
import slider_inf_img2 from '../img/slider-inf-img2.png'
import slider_inf_img3 from '../img/slider-inf-img3.png'
import slider_inf_img4 from '../img/slider-inf-img4.png'
import slider_inf_img5 from '../img/slider-inf-img5.png'
import slider_inf_img6 from '../img/slider-inf-img6.png'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="row slider-row">
          <div className="col-md-12 col-xs-12">
             <AutoplaySlider
    play={true}
    cancelOnInteraction={false} 
    interval={3000}>
    <div> <img
                    src={slider_inf_img_m1}
                    className="slider-img"
                    alt="no-image"
                  /></div>
    <div><img
                    src={slider_inf_img_m2}
                    className="slider-img"
                    alt="no-image"
                  /></div>
    <div><img
                    src={slider_inf_img_m3}
                    className="slider-img"
                    alt="no-image"
                  /></div>
    <div><img
                    src={slider_inf_img_m4}
                    className="slider-img"
                    alt="no-image"
                  /></div>
  </AutoplaySlider>
            <div className="slider-information-wrap">
              <div className="information-img-box">
                <div className="slider-inf-img slider-inf-img1">
                  <img
                    src={slider_inf_img1}
                    className="slider-img"
                    alt="no-image"
                  />
                </div>
                <div className="slider-inf-img">
                  <img
                    
                    src={slider_inf_img2}
                    className="slider-img"
                    alt="no-image"
                  />
                </div>
                <div className="slider-inf-img">
                  <img
                    src={slider_inf_img3}
                    className="slider-img"
                    alt="no-image"
                  ></img>
                </div>
              </div>
              <div className="information-img-box">
                <div className="slider-information">
                  <div className="inf-name">
                    Ненавязчивый анализ Mirror’s Edge
                  </div>
                  <div className="inf-text">
                    Ещё совсем недавно осень считалась главным поставщиком
                    крупных игровых релизов. Полки магазинов ломились от
                    новинок, а от покупателей не было отбоя. Доходило до того,
                    что к концу сезона кошельки походили на выпотрошенные туши.
                  </div>
                </div>
                <div className="information-img-box2">
                  <div className="slider-inf-img  slider-inf-img4">
                    <img
                      src={slider_inf_img4}
                      className="slider-img"
                      alt="no-image"
                    ></img>
                  </div>
                  <div className="slider-inf-img slider-inf-img5">
                    <img
                      src={slider_inf_img5}
                      alt="no-image"
                      className="slider-img"
                    ></img>
                  </div>
                  <div className="slider-inf-img slider-inf-img6">
                    <img
                      src={slider_inf_img6}
                      className="slider-img"
                      alt="no-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Slider