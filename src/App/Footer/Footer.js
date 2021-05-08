import React from "react";
import '../../common/style/base.css'
import { Link } from "react-router-dom"
import footer_form_ico from '../img/footer-form-ico.png'
import footer_img from '../img/footer-img.png'
import footer_img_decor from '../img/footer-img-decor.png'
import twitter from '../img/twitter.png'
import facebook from '../img/facebook.png'
import ico1 from '../img/ico1.png'
import google from '../img/google.png'
import ico2 from '../img/ico2.png'
import footer_stick from '../img/footer-stick.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-md-9 col-xs-9">
            <div className="footer-img">
              <img
                src={footer_img}
                className="footer-img-person"
                alt="no-image"
              />
            </div>
            <div className="footer-decor">
              <img
                src={footer_img_decor}
                className="footer-img-decor"
                alt="no-image"
              />
            </div>
            <div className="footer-content-wrap">
              <div className="footer-form">
                <div className="footer-bg-img"></div>
                <div className="wrap-form-ico">
                  <img src={footer_form_ico} alt="no-image"/>
               
                <div className="ftr-box-ico">
                  <div className="ftr-ico">
                    <img src={twitter} alt="no-image"/>
                  </div>
                
                <div className="ftr-ico ftr-ico1">
                  <img src={facebook} alt="no-image"/>
                </div>
                <div className="ftr-ico ftr-ico2">
                 
                  <img src={ico1} alt="no-image"/>
                </div>
                <div className="ftr-ico ftr-ico3">
                  <img src={google} alt="no-image"/>
                </div>
                <div className="ftr-ico ftr-ico4">
                  <img src={ico2} alt="no-image"/>
                  </div>
                  </div>
                   </div>
              
              <div className="ftr-form-cont">
                <div className="form-name">Немного о нашем сайте</div>
                <div className="form-text">
                  AM4 — это большая коллекция игровой информации, помогающей
                  геймерам со всего мира быть в курсе последних новостей игровой
                  индустрии. Дальше не знаю, что писать... В общем, надеюсь
                  макет вам понравится.
                </div>
                </div>
                </div>
            </div>
          <Link to="/contactus"><button className="frm-btn">Написать нам</button></Link>
          </div>
         
       
        <div className="col-md-3 col-xs-3 footer-inf-wrap">
          <div className="ftr-limitation">+18</div>
          <div className="ftr-information">
            <div className="ftr-inf-name">Copyright © 2001-2014</div>
            <div className="ftr-inf-text">
              Все права защищены законодательством РФ. Использование материалов
              сайта возможно только с прямой ссылкой на источник.
            </div>
          </div>
          <div className="footer-stick">
            <img src={footer_stick} alt="stick"/>
          </div>
          </div>
           </div>
      </div>
    </footer>
  );
}

export default Footer


